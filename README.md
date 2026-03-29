# SPAIK Clone

Pixel-perfect clone of [spaik.io](https://www.spaik.io) built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

Bilingual (NL/EN), fully responsive, production-ready for Vercel deployment.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build (zero errors)
```

## Tech Stack

- **Next.js 16** (App Router, React 19, TypeScript strict)
- **Tailwind CSS v4** with oklch design tokens
- **next-intl** for i18n (NL default, EN at /en/)
- **Lenis** for smooth scroll
- Custom fonts: IvyPresto Headline, SF Pro Text/Display, PP Agrandir Tight

## Pages

| Route | Description |
|-------|-------------|
| `/` | Dutch homepage (hero, cases, problem/solution, services, team, insights, AI discovery, FAQ, CTA) |
| `/en/` | English homepage |
| `/blog` | Blog index with 3 posts |
| `/en/blog` | English blog index |
| `/blog/[slug]` | Individual blog posts (SSG) |
| `/legal` | Terms & conditions |
| `/en/legal` | English legal |
| `/sitemap.xml` | Dynamic sitemap with hreflang |
| `/robots.txt` | Search engine directives |

## Features

- Bilingual content with language switcher (NL/EN)
- Carousel with auto-advance, progress bars, and animated counters
- Scroll-reveal animations with IntersectionObserver
- Animated gradient on testimonial card
- SPAIK dot-grid decorative patterns throughout
- Grain/dither texture overlays
- Rolling text button hover effects
- FAQ accordion with smooth height transitions
- Sticky header with backdrop blur on scroll
- Custom error (500) and not-found (404) pages
- JSON-LD structured data (Organization + BlogPosting)
- OG tags, twitter cards, hreflang, canonical URLs
- Security headers (HSTS, X-Frame-Options, CSP-adjacent, Permissions-Policy)

## Team

12 core team members + 2 advisors (Joep de Caluwe, Jan van Casteren) with LinkedIn links and photos.

## Project Structure

```
src/
  app/[locale]/        # Next.js i18n routes
  components/          # 18 React components
    icons.tsx          # Shared SVG icons
  data/blog-posts.ts   # Static blog content (NL + EN)
  i18n/                # next-intl config, routing, typed locale
  lib/constants.ts     # External URLs
public/
  images/              # Optimized images (~3.8MB)
  videos/              # Hero + CTA animations
  fonts/               # IvyPresto, SF Pro, PP Agrandir (woff2)
  seo/                 # Favicons, OG image
messages/
  nl.json              # Dutch translations
  en.json              # English translations
docs/solutions/        # Compound learnings from development
```

## Design System

See [DESIGN.md](DESIGN.md) for the full design system: colors, typography, spacing, textures, animations, and section backgrounds.

## Deployment

Zero-config Vercel deployment. Connect the repo and it deploys automatically.

```bash
npm run build    # Verify locally first
```

## License

MIT
