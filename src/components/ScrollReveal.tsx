"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const transforms: Record<string, string> = {
  up: "translateY(24px)",
  left: "translateX(-24px)",
  right: "translateX(24px)",
  none: "none",
};

/**
 * Scroll-reveal using CSS classes + IntersectionObserver.
 * Elements start invisible via CSS and reveal when scrolled into view.
 * Elements already in viewport on mount are revealed immediately (no flash).
 */
export function ScrollReveal({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    // Apply initial hidden state via direct style (avoids SSR mismatch)
    el.style.opacity = "0";
    el.style.transform = transforms[direction];

    const reveal = () => {
      el.style.transition = `opacity var(--duration-slower, 0.6s) var(--ease-default, ease) ${delay}ms, transform var(--duration-slower, 0.6s) var(--ease-default, ease) ${delay}ms`;
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    // Check if already in viewport — reveal immediately (next frame for paint)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50) {
      requestAnimationFrame(() => reveal());
      return;
    }

    // Below viewport — use IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    observer.observe(el);

    // Backup: also listen for scroll events in case IO doesn't fire with smooth scroll
    const checkVisibility = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight + 50) {
        reveal();
        observer.unobserve(el);
        window.removeEventListener("scroll", checkVisibility);
      }
    };

    window.addEventListener("scroll", checkVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkVisibility);
    };
  }, [delay, direction]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
