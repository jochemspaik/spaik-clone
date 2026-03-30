"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollStaggerProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child's animation (ms) */
  staggerMs?: number;
  /** Base delay before the first child animates (ms) */
  baseDelay?: number;
}

/**
 * Stagger-reveal children on scroll.
 * Each direct child fades in and slides up with an incremental delay.
 * Uses IntersectionObserver — no scroll listeners.
 */
export function ScrollStagger({
  children,
  className = "",
  staggerMs = 100,
  baseDelay = 0,
}: ScrollStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const items = Array.from(container.children) as HTMLElement[];

    if (prefersReducedMotion) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    // Set initial hidden state
    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            const delay = baseDelay + i * staggerMs;
            el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;
            el.style.opacity = "1";
            el.style.transform = "none";
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerMs, baseDelay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
