---
title: "Next.js Image Component width/height Warnings"
category: build-errors
module: next.js
tags: [nextjs, image, warnings, svg, aspect-ratio]
severity: low
symptoms:
  - "Image with src X has either width or height modified, but not the other"
  - "Console flooded with Image warnings on every page navigation"
date_created: 2026-03-29
verified: true
---

# Next.js Image width/height Warnings

## Problem

Next.js Image component produces development-mode warnings when `width` and `height` props are set but CSS modifies only one dimension. This is especially common with SVG logos and icons where you set `width={120} height={30}` but the actual SVG has a different aspect ratio.

## Root Cause

Next.js validates that if you modify one dimension via CSS, you should also set the other to `auto` to maintain aspect ratio. The warning appears when:
- `width` prop is set but CSS only modifies width (missing `height: auto`)
- Or vice versa

## Solution

Add `style={{ height: "auto" }}` to Image components with explicit width/height:

```tsx
// Before (triggers warning)
<Image src="/images/Logo.svg" alt="SPAIK" width={120} height={30} />

// After (no warning)
<Image src="/images/Logo.svg" alt="SPAIK" width={120} height={30} style={{ height: "auto" }} />
```

**Note:** For SVGs in Next.js 16, even with `style={{ height: "auto" }}`, the warning may persist. This is a known Next.js quirk — the warnings are development-only and do not appear in production builds. They do not affect rendering or performance.

## When to Ignore

- Production builds: these warnings never appear
- SVG images: the aspect ratio is handled by the SVG viewBox, not the Image component
- Decorative images with `fill` prop: use `sizes` instead of width/height

## Prevention

Use `fill` + `sizes` for responsive images instead of explicit width/height when possible. Reserve width/height for fixed-size elements (logos, icons, avatars).
