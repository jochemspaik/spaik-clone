---
title: "Website Clone Design Review Checklist"
category: ui-bugs
module: design
tags: [design-review, clone, pixel-perfect, touch-targets, accessibility, mobile]
severity: medium
symptoms:
  - "Clone looks off compared to original"
  - "Mobile tap targets too small"
  - "Section order doesn't match original site"
  - "Console warnings from Next/Image"
date_created: 2026-03-29
verified: true
---

# Website Clone Design Review Checklist

## Problem

After cloning spaik.io, a systematic design review revealed 25 findings across 6 specialist review perspectives (security, performance, architecture, TypeScript, patterns, simplicity). Many issues were invisible during development but detectable with structured auditing.

## The 6-Agent Review Approach

Running these review agents in parallel gives comprehensive coverage:

1. **Security Sentinel** — XSS vectors, open redirects, missing headers, exposed secrets
2. **Performance Oracle** — bundle size, images, animations, font loading, SSR strategy
3. **Architecture Strategist** — component tree, i18n, routing, type safety, static generation
4. **TypeScript Reviewer** — types, React patterns, naming, dead code, accessibility
5. **Pattern Recognition** — consistency, duplication, anti-patterns across files
6. **Code Simplicity** — YAGNI, unused deps, dead CSS, over-engineering

## Most Common Findings (reusable across projects)

### Touch Targets
Every interactive element must be >= 44x44px. Common offenders:
- Social media icons (often 20x20)
- Language switcher buttons
- Hamburger menu buttons
- Footer navigation links

**Fix:** Wrap small icons in `h-11 w-11 flex items-center justify-center` containers.

### Dead CSS Accumulation
After rapid development, CSS files accumulate unused classes. Grep each class name against .tsx files before keeping it.

**Audit command:**
```bash
# Find CSS class definitions
grep -oE '\.[a-z][a-z-]+' src/app/globals.css | sort -u | while read cls; do
  name=${cls#.}
  count=$(grep -r "$name" src/ --include="*.tsx" -l 2>/dev/null | wc -l)
  [ "$count" -eq 0 ] && echo "UNUSED: $name"
done
```

### Duplicated SVG Icons
Icon components get copy-pasted across files. Solution: create a shared `icons.tsx` with parameterized color/size props.

### Inline Styles vs Utility Classes
When using Tailwind, avoid mixing inline `style={{}}` with className. Pick one approach per value type. Tailwind is searchable and responsive; inline styles are precise for pixel-perfect clones.

### Missing Error Boundaries
Next.js App Router needs explicit `error.tsx` and `not-found.tsx` in each route segment. Without them, runtime errors show a white screen.

### Section Order Matters
For marketing sites, the narrative flow should be: problem → solution → proof (cases). Verify section order matches the original site's storytelling arc.

## Prevention

- Run the 6-agent review after each major development phase
- Use `npm run build` route table to verify static vs dynamic rendering
- Grep for duplicate component definitions: `grep -rn "function.*Icon" src/`
- Test on mobile viewport (375px) for every change
