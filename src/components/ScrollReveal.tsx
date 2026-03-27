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
 * Subtle scroll-reveal: only animates elements that start BELOW the fold.
 * Elements within the initial viewport show immediately — no flash of invisible content.
 */
export function ScrollReveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "visible">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const isAboveFold = rect.top < window.innerHeight * 1.1;

    // If element is near the viewport on mount, show it immediately
    if (isAboveFold) {
      setState("visible");
      return;
    }

    // Below the fold — set up scroll observation
    setState("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transforms = {
    up: "translateY(24px)",
    left: "translateX(-24px)",
    right: "translateX(24px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: state === "hidden" ? 0 : 1,
        transform: state === "hidden" ? transforms[direction] : "none",
        transition:
          state !== "idle"
            ? `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
            : "none",
      }}
    >
      {children}
    </div>
  );
}
