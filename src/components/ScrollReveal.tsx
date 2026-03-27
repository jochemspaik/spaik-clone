"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect, type ReactNode, type CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

/**
 * Wraps children in a fade-in animation triggered by scroll.
 * SSR-safe: renders visible on server, adds animation on client only.
 */
export function ScrollReveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseTransform = {
    up: "translateY(30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
    none: "none",
  };

  // Before hydration: show everything. After hydration: animate.
  const shouldAnimate = mounted && !isVisible;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: shouldAnimate ? 0 : 1,
        transform: shouldAnimate ? baseTransform[direction] : "none",
        transition: mounted
          ? `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
