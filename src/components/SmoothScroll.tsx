"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scroll provider with resilience against RAF stalls.
 *
 * Known issue: Lenis can stop processing scroll events when the
 * browser pauses the animation frame loop (tab switch, dev tools,
 * certain focus changes). This implementation adds:
 * - visibilitychange listener to restart on tab return
 * - wheel event watchdog that detects stalls and recreates Lenis
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    function createLenis() {
      lenisRef.current?.destroy();
      const lenis = new Lenis({
        autoRaf: true,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      });
      lenisRef.current = lenis;
      return lenis;
    }

    createLenis();

    /* Restart Lenis when the tab becomes visible again */
    function handleVisibility() {
      if (document.visibilityState === "visible") {
        createLenis();
      }
    }

    /* Watchdog: if the user scrolls the wheel but Lenis isn't
       animating, the RAF loop stalled. Recreate Lenis. */
    let watchdogTimer: ReturnType<typeof setTimeout> | null = null;
    function handleWheel() {
      if (watchdogTimer) clearTimeout(watchdogTimer);
      watchdogTimer = setTimeout(() => {
        const lenis = lenisRef.current;
        if (lenis && !lenis.isScrolling && !lenis.isLocked) {
          createLenis();
        }
      }, 200);
    }

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("wheel", handleWheel);
      if (watchdogTimer) clearTimeout(watchdogTimer);
      lenisRef.current?.destroy();
    };
  }, []);

  return <>{children}</>;
}
