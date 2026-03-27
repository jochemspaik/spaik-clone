"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

/**
 * Wraps children in a fade-in animation triggered by scroll.
 * Elements already in the viewport on mount are shown immediately.
 */
export function ScrollReveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if already in viewport on mount — if so, show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      setReady(true);
      return;
    }

    // Not in viewport — set up observer
    setReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseTransform = {
    up: "translateY(30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
    none: "none",
  };

  // Before ready (SSR + first paint): show everything
  // After ready but not visible: hide with transform
  // After visible: show with animation
  const shouldHide = ready && !isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: shouldHide ? 0 : 1,
        transform: shouldHide ? baseTransform[direction] : "none",
        transition: ready
          ? `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
