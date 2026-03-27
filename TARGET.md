# TARGET WEBSITE — FULL CLONE OF SPAIK.IO
URL: https://www.spaik.io
Primary language: Dutch (nl) at root where available
Secondary language: English (en) at /en/

# EXACT PAGES & ROUTES TO CLONE (both languages where they exist)
- / (root homepage — hero, testimonials, services, team, insights section, CTAs, discovery tool, FAQs)
- /en/ (full English homepage)
- /blog (Dutch blog index with all post cards, authors, dates, read time, filters)
- /en/blog (English blog index with all post cards)
- /en/legal/algemenevoorwaarden-nl (full English Terms & Conditions page)
- Map the legal page to clean routes: /legal (Dutch version — auto-translate content if no native Dutch legal page exists) and /en/legal (English)

# BLOG / INSIGHTS SPECIFICS
- Clone the full blog index at /blog and /en/blog (use real post titles, authors, dates, images, and links).
- Create dynamic Next.js routes /blog/[slug] and /en/blog/[slug] for individual posts (statically generate them).
- Preserve all real content and make posts fully bilingual.

# LOCALIZATION (must use next-intl — the 2026 standard)
- Install and fully configure next-intl (middleware.ts, i18n.ts, navigation, etc.).
- Locales: 'nl' (default/root) and 'en'.
- URL structure: root = Dutch, /en/ = English (exact match to live site).
- Extract ALL text/strings from cloned pages into messages/nl.json and messages/en.json.
- Shared components, only messages change.
- Add a clean language switcher in the header (NL / EN links or flags) that preserves the current page.
- Full hreflang tags and locale-specific metadata on every page.

# DESIGN & FIDELITY
- Pixel-perfect match on desktop + mobile for every page and every language.
- Exact colors, typography, spacing, icons, hover animations, responsive breakpoints, and computed styles from the live site.
- Use the same modern stack: Next.js 16 App Router + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui.

# SEO & PRODUCTION READINESS (mandatory)
- Add proper generateMetadata for every page (title, description, OG images, canonicals, locale-specific).
- Generate dynamic sitemap.xml that includes all pages + both language versions.
- robots.txt, JSON-LD structured data for organization + blog posts.
- Optimize all images with Next/Image.
- Make blog posts statically generated where possible.
- Full production-ready build (npm run build must succeed with zero errors).

# POST-CLONE AUTOMATIC TASKS
After the initial clone finishes:
- Run full QA: pixel-perfect check on mobile + desktop for all pages and both languages.
- Fix any broken links (especially blog cards → individual posts).
- Ensure language switcher works perfectly and updates URLs correctly.
- Make /legal and /en/legal fully functional.
- Add a simple footer with links to /blog, /en/blog, /legal, /en/legal.
- Verify the site is 100% deployable to Vercel with zero config.
