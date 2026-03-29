---
title: "Next.js Marketing Site Performance Audit Checklist"
category: performance-issues
module: next.js
tags: [nextjs, rsc, performance, images, fonts, animations, marketing-site]
severity: high
symptoms:
  - "Large JS bundle on static marketing pages"
  - "Slow LCP on image-heavy pages"
  - "Janky scroll on mobile"
  - "High main thread usage on idle page"
date_created: 2026-03-29
verified: true
---

# Next.js Marketing Site Performance Audit

## Problem

Marketing site clone (Next.js 16 + React 19) had every component marked `"use client"` despite most being purely presentational. Combined with autoplay videos, raw `<img>` tags, a permanent rAF loop from Lenis smooth scroll, and redundant scroll listeners, the site was shipping unnecessary JS and blocking the main thread.

## Root Cause

When using `next-intl`, the `useTranslations()` hook requires `"use client"`. Developers default to adding this to every component, even those that could use the server-side `getTranslations()` alternative. This cascading client boundary means the entire page ships as client JS.

## Key Findings (ranked by impact)

### 1. Excessive `"use client"` — zero RSC benefit
**Impact:** Entire page JS ships to browser, hurts LCP and INP.
**Fix:** Use `getTranslations()` from `next-intl/server` in server components. Only wrap truly interactive parts (carousels, accordions, menus) in `"use client"`.

### 2. Lenis smooth scroll permanent rAF loop
**Impact:** `requestAnimationFrame` fires every 16ms forever, even when idle.
**Fix:** Use `autoRaf: true` option (Lenis v1.1+), which uses `requestIdleCallback` internally.
```ts
// Before (bad)
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

// After (good)
const lenis = new Lenis({ autoRaf: true, ... });
```

### 3. Autoplay videos without lazy loading
**Impact:** 13.6MB loaded eagerly (hero 4.4MB + CTA 9.2MB below fold).
**Fix:** Add `preload="none"` to below-fold videos, use IntersectionObserver to set src when visible.

### 4. Raw `<img>` tags bypassing Next/Image
**Impact:** No WebP/AVIF conversion, no responsive srcset, no lazy loading.
**Fix:** Replace with `<Image>` for raster images. For decorative textures used via CSS mask-image, `<img>` is acceptable but document the choice.

### 5. Redundant scroll listeners as "backup" for IntersectionObserver
**Impact:** N scroll listeners (one per ScrollReveal instance) firing on every frame with Lenis.
**Fix:** Remove the backup. IntersectionObserver works reliably with Lenis.

### 6. Carousel destructive `key` prop
**Impact:** React unmounts/remounts entire card (including images) on every slide change.
**Fix:** Remove `key={active-direction}`. Use CSS transitions for slide changes.

### 7. Font files not preloaded
**Impact:** FOUT (flash of unstyled text) on first load, especially for display fonts.
**Fix:** Add `<link rel="preload" as="font" type="font/woff2" crossOrigin="anonymous">` in layout `<head>` for critical fonts.

### 8. CSS animation on paint-triggering properties
**Impact:** `background-position` animation triggers paint every frame.
**Fix:** Use `transform: translateX()` on a pseudo-element, or `animation-play-state: paused` when off-screen.

## Prevention

- Run `npm run build` and check route table: `f` (Dynamic) pages should be `o` (Static) or `●` (SSG) when possible
- Grep for `"use client"` and verify each one needs client interactivity
- Use Lighthouse CI or Web Vitals to catch LCP/INP regressions
- Every `<video autoPlay>` below the fold needs `preload="none"`
