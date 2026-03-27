"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ReactNode, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

/**
 * Wraps children in a fade-in animation triggered by scroll.
 * Matches the Framer scroll-reveal behavior.
 */
export function ScrollReveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  const baseTransform = {
    up: "translateY(30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : baseTransform[direction],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
