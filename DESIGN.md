# SPAIK Design System

Extracted from the SPAIK Brand Guidelines (November 2025) and the live site at spaik.io.

## Brand Identity

**Logomark:** Dot-grid pattern representing teamwork and ensemble of expertises. Versatile and declinable — the starting point of the whole brand.
- Minimum size: 20px height (standalone), 118px wide (lockup)
- Clear space: 0.5x around logomark (x = logomark height)

**Logotype:** Serif font, all caps. "Seniority with a retro tint." Premium feel.

**Tone of voice:** "We're the AI Adoption Partner who stays until AI structurally delivers efficiency — from management buy-in to self-sufficient teams."

## Colors

### Primary
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Off-White | `#F3EDED` | 243/237/237 | Backgrounds, section breaks |
| Off-Black | `#0B0B0B` | 11/11/11 | Text, logo |

### Secondary (pastel shades — serenity and trust)
| Name | Hex | RGB | CSS Variable | Usage |
|------|-----|-----|-------------|-------|
| Orange | `#FF7150` | 255/113/80 | `--spaik-orange` | CTAs, highlights, accents. **Never as background.** |
| Pastel Green | `#BADAD5` | 186/218/213 | `--spaik-green` | Case card accents |
| Clay | `#DEDCCC` | 222/220/204 | `--spaik-clay` | Borders, muted elements |
| Sky Blue | `#A2BDF0` | 162/189/240 | `--spaik-blue` | Solution cards, testimonial bg |
| Lilac | `#E1D2FF` | 225/210/255 | `--spaik-lilac` | Accents, case card bg |

### Color Rules
- Off-Black **never** as a background color
- Orange **never** as a background color — designs remain light
- Gradients **always** contain Off-White to balance and keep a clear background
- Pair max 2 secondary colors with Off-White in gradients

## Typography

### Font Stack
- **Headings:** SF Pro Display (thin weight 100, serif-like appearance in the logotype context)
- **Body:** SF Pro Text / system sans-serif
- **Logotype:** Custom serif, all caps

### Type Scale (from live site)
| Element | Size | Weight | Line Height | Color |
|---------|------|--------|-------------|-------|
| Hero h1 | 60px | 100 | 1.1 | `#0B0B0B` |
| Section heading (h2) | 32px | 100 | 1.2 | `#0B0B0B` |
| Card heading (h3) | 20px | 700 | 1.3 | `#0B0B0B` |
| Body | 16px | 400 | 1.5 | `rgba(0,0,0,0.7)` |
| Caption/meta | 14px | 400 | 1.4 | `rgba(0,0,0,0.5)` |
| Label/small | 13px | 500 | 1.3 | `rgba(0,0,0,0.6)` |

## Spacing

### Layout
- Max content width: `1080px`
- Section padding: `80px` vertical, `40px` horizontal
- Responsive horizontal: `24px` (mobile), `40px` (tablet+)

### Component Spacing
- Section gap between heading and content: `48px` (`mb-12`)
- Card internal padding: `32px` (`p-8`)
- Grid gap: `24px` (`gap-6`)
- Button padding: `16px 32px`

## Border Radius
| Element | Radius |
|---------|--------|
| Cards | `16px` (`rounded-2xl`) |
| Large containers | `24px` (`rounded-3xl`) |
| Buttons | `12px` (`rounded-xl`) |
| Team photos | `12px` (`rounded-xl`) |
| Inputs | `8px` (`rounded-lg`) |

## Textures & Gradients

### Texture Overlays
- `Texture 1.webp` — flowing organic pattern. Use at **8-15% opacity** as background overlay.
- Applied to: Problem/Solution bg, Services bg, Team section, Cases section

### Gradient Blobs
- `Gradient 01-05.webp` — soft radial color blobs combining 2 secondary colors with Off-White
- Position as decorative accents at **10-15% opacity**, typically bottom-right or corner-anchored
- Brand rule: gradients always contain Off-White for balance

### Dot-Grid Patterns
- `hero-graphic.png` — expanded logomark as large decorative grid
- `product-dot-pattern.png` — repeating dot pattern for overlays
- Use at **10-15% opacity** for decorative texture
- The dot-grid is the brand's signature visual element — use it deliberately

## Animations

### Scroll Reveal
- Duration: `0.6s`
- Easing: `ease`
- Direction: `translateY(24px)` (default up), also `left`/`right` variants
- Trigger: IntersectionObserver at `threshold: 0.05`

### Smooth Scroll
- Library: Lenis v1+
- Duration: `1.2s`
- Easing: exponential (`1.001 - Math.pow(2, -10 * t)`)

### Micro-interactions
- Button hover: rolling text effect (0.3s cubic-bezier)
- Card hover: subtle scale `1.02` (0.2s)
- FAQ accordion: grid-template-rows transition (0.2s)
- Counter animation: 1.5s count-up on intersection

## Section Backgrounds

| Section | Background | Overlays |
|---------|-----------|----------|
| Hero | White | Dot-grid pattern left 10%, radial gradient on video |
| Logo Ticker | White | Edge fade gradients |
| Cases | White | Texture 1 at 8% |
| Problem/Solution | Off-White `#F3EDED` | Texture 1 at 8% |
| Discovery | White | Subtle gradient wash |
| Services | White | Texture 1 at 10%, Gradient 03 bottom-right at 14% |
| Team | White | Texture 1 top-right at 12% |
| Insights | White | — |
| AI Discovery | White | Gradient 01 at 15%, dot pattern at 10% |
| FAQ | White | — |
| CTA | White | Dot pattern on video at 15% |
| Footer | White | Dot pattern bottom-right at 10% |

## Case Study Card Colors

| Company | Card Background | Logo |
|---------|----------------|------|
| Movir | `#fef5f3` (warm pink) | `logo-movir.png` |
| Euphoria | `#f7f4ff` (lavender) | `logo-euphoria.png` |
| Reditus | `#eef6f5` (mint) | `logo-reditus.jpg` |

## Grid Layouts

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Team | 1 col | 2 col | **3 col** |
| Services | 1 col | 1 col | 3 col |
| Blog/Insights | 1 col | 2 col | 3 col |
| FAQ | 1 col | 1 col | 1 col |

## Assets Location

Brand assets: `/Users/jochemvanlaren/Documents/SPAIK/spaik branding (1)/`
- `Icons/` — SPAIK dot-grid service icons (SVG)
- `Textures/` — Organic flowing textures (PNG)
- `Gradients/` — Soft radial gradient blobs (PNG)
- `Photos/Teamfotos/` — All team member photos
- `Client logos/` — Movir, Euphoria, Reditus, etc.
- `Logo/SVG/` — Logomark.svg, Logo.svg
- `Videos/` — Hand video, hero animation
