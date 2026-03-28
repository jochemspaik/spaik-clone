# Session 3 Final Handoff — Skills + Design Polish

## Date: 2026-03-28 16:15

## CRITICAL: Team Photos Are Wrong

The team photos downloaded in session 2 are **incorrectly mapped to names**. Only 8 unique photos exist for 14 people — 6 photos are duplicated:

| File | Shows | Should Be | Status |
|------|-------|-----------|--------|
| team-jochem.jpg | Woman (black shirt, water) | Jochem van Laren (man) | WRONG |
| team-thijs.jpeg | Man (curly hair, blazer) | Thijs Bongertman | Possibly correct |
| team-jan.png | Man (bald, red beard, Amsterdam) | Jan Bolle | WRONG - looks like Duco |
| team-ted.jpg | Man (blond, green shirt) | Ted Blankers | Possibly correct |
| team-philip.jpg | Woman (glasses, water) | Philip de Leeuwe (man) | WRONG |
| team-gwen.jpg | Man (blond messy, blue shirt) | Gwen Roelofs (woman) | WRONG |
| team-brahma.png | Man (formal, dark hair, city) | Brahma Behrend | Possibly correct |
| team-mike.png | Man (patterned shirt, water/church) | Mike Krom | Possibly correct |
| team-jasmijn.jpg | DUPLICATE of team-jochem.jpg | Jasmijn de Groot | DUPLICATE |
| team-duco.jpg | DUPLICATE of team-thijs.jpeg | Duco Gaillard | DUPLICATE |
| team-booy.png | DUPLICATE of team-jan.png | Booy van Hees | DUPLICATE |
| team-aron.jpg | DUPLICATE of team-ted.jpg | Aron Rikels | DUPLICATE |
| team-mirjam.jpg | DUPLICATE of team-philip.jpg | Mirjam Cassee | DUPLICATE |
| team-jeroen.jpg | DUPLICATE of team-gwen.jpg | Jeroen Donders | DUPLICATE |

### Fix approach
1. Re-download ALL team photos from spaik.io/en using browse tool
2. This time, take screenshots of the team section and match VISUALLY
3. Or: ask Jochem to provide the branding photos folder → `/Users/jochemvanlaren/Documents/SPAIK/SPAIK Branding (1)/Photos/Teamfotos/`
4. Need Jochem's verification for each photo → person match

## Other Open Issues

### High Priority
1. **Case study carousel photos** — Jochem reports they don't show. Files exist on disk but may have browser cache issues. Verify with fresh browser.
2. **Euphoria logo** — File exists at `/images/logo-euphoria.png`. Was replaced in session 2 from branding folder. Verify visually.
3. **CTA video not looping** — Has `autoPlay loop muted playsInline` attributes. Poster re-extracted at 3s. May be browser-specific issue.

### Design Improvements (from video analysis)
4. **Animated gradient behind Johanneke** — Original has a slowly animating blue/lilac gradient behind her testimonial. Currently static CSS gradient.
5. **Letter animation on titles** — Original has a "springend" letter-by-letter animation effect on section headings when they scroll into view. Currently we only have fade-up.
6. **Case study cards** — Original has more prominent colored accents, subtle dither on left/right edges
7. **Progress bar** in case carousel — needs to stay within the card bounds

### Completed in This Session
- 6 design skills installed (taste-skill, frontend-design, web-design-guidelines, ui-ux-pro-max, ui-animation, shadcn-ui)
- Full web-design-guidelines audit: eliminated all `transition-all`, added prefers-reduced-motion, focus-visible, animation tokens, touch-action
- Feng shui balance pass: logo ticker, team layout, CTA balance, section backgrounds
- SPAIK brand icons on service cards
- Grain/dither noise overlay (SVG feTurbulence) on solution cards
- Hero dot-grid fix (CSS mask fade-out, reduced opacity)
- Footer enlarged logomark
- Discovery section labels fixed
- Johanneke photo enlarged
- AI Discovery laptop mockup image
- Team grid back to 4 columns
- DESIGN.md updated with brand guide rules + animation tokens

## Git State
- Branch: master
- ~60 commits ahead of origin
- All builds passing
- Dev server on localhost:3000

## Files Changed (this session)
- src/app/globals.css (animation tokens, touch-action, grain-overlay, focus-visible, prefers-reduced-motion)
- src/components/ScrollReveal.tsx (prefers-reduced-motion, animation tokens)
- src/components/Header.tsx (specific transitions)
- src/components/TeamSection.tsx (4-col grid, compact extended row)
- src/components/CTASection.tsx (balance: heading/description sizes)
- src/components/ServicesSection.tsx (SPAIK brand icons)
- src/components/DiscoverySection.tsx (warm bg, gradient, specific transitions)
- src/components/FAQSection.tsx (warm bg)
- src/components/LogoTicker.tsx (white bg, multiply blend, 150px)
- src/components/ProblemSolutionSection.tsx (grain overlay, Johanneke bigger)
- src/components/HeroSection.tsx (dot-grid mask, reduced opacity)
- src/components/Footer.tsx (enlarged logomark)
- src/components/AIDiscoverySection.tsx (two-column layout with image)
- src/components/CasesSection.tsx (specific transitions, sizes)
- src/components/RollingTextButton.tsx (active tactile feedback)
- DESIGN.md (brand guide rules, animation tokens)
- messages/nl.json + messages/en.json (Discovery labels)
- public/images/icon-*.svg (3 SPAIK brand icons)
- public/images/ai-discovery-product.png (replaced with laptop mockup)
