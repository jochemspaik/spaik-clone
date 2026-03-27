# QA Report — Clone vs Original spaik.io

## Critical Layout Pattern (affects EVERY section)
**Original:** Every section centers content in a `maxWidth: 1080px` container with `padding: 80px 40px`.
**Clone:** Uses mixed widths (1200px, 100%, etc.) and inconsistent padding.
**Fix:** Apply consistent `max-w-[1080px] mx-auto px-10 py-20` to every section's inner container.

## Section-by-Section Discrepancies

### 1. Navigation
- **Original:** Container `maxWidth: 1080px`, `padding: 20px 40px`, height ~87px, flex row justify-between
- **Clone:** Close but needs exact padding/maxWidth match

### 2. Hero (id="header")
- **Original:** Outer flex-row center, inner `1080px`, `padding: 80px 40px`, H1 width 640px
- **Original:** Hero graphic is absolutely positioned overlapping right side
- **Clone:** Missing the absolutely positioned hero graphic, layout proportions off

### 3. Logo Ticker
- **Original:** `maxWidth: 1200px`, height 200px
- **Clone:** Mostly OK, needs height adjustment

### 4. Cases (id="cases")
- **Original:** flex-column, gap 80px, inner 1080px, padding `0 40px 80px`
- **Original:** Person photos are ABSOLUTELY POSITIONED (572x652px) overlapping cards from left/right
- **Clone:** Person photos inline (not positioned), missing the overlap effect
- **Original:** Background is white with colored case cards
- **Clone:** Cards don't match original layout (horizontal cards with photo overlap)

### 5. Problem/Solution (id="probleem") — MOST BROKEN
- **Original:** Background `rgb(243, 237, 237)` — WARM BEIGE/GRAY. ONE section.
- **Original:** Inner 1080px, padding 120px 40px, gap 120px between problem and solution blocks
- **Clone:** Uses dark black (#0b0b0b) left half + beige right half — COMPLETELY WRONG
- **Fix:** Should be ONE full-width section with warm gray bg, content in two blocks vertically

### 6. Discovery Tool
- **Original:** Full width 1425px, height 868.5px, Framer interactive component
- **Clone:** Simplified static version, needs interactive department picker

### 7. Services (id="services-1")
- **Original:** Inner 1080px, padding 80px 40px, gap 47px, has rotated decorative dot element
- **Original:** Service cards are expandable/foldable (Framer interaction)
- **Clone:** Cards are static, missing fold/expand interaction

### 8. Team (id="team")
- **Original:** Inner 1080px, padding 80px 40px, gap 32px
- **Original:** Has decorative rotated dot pattern top-right
- **Original:** Team cards have circular photos with hover effects
- **Clone:** Grid is OK but missing decorative dots, hover states need work

### 9. Insights
- **Original:** Inner 1080px, padding 80px 40px, gap 46px
- **Original:** Blog cards have thumbnail images with titles
- **Clone:** Missing blog thumbnail images

### 10. AI Discovery
- **Original:** flex-ROW (two columns), inner 1080px, gap 67px
- **Clone:** May be stacked column — needs to be row layout

### 11. FAQ (id="faq")
- **Original:** Standard accordion in 1080px container
- **Clone:** Close, needs exact styling match

### 12. CTA
- **Original:** Framer component, 1425x476px
- **Clone:** Simplified version

### 13. Footer
- **Original:** flex column, full width, height 388px
- **Clone:** Needs spacing/layout adjustment

## Missing Translation Keys
Multiple `cases.movir.stat1Label`, `cases.movir.roi`, `solution.ctaUseCases` etc. showing as raw keys.

## Priority Fixes
1. Fix global layout pattern (1080px container + 80px 40px padding)
2. Fix Problem/Solution section (warm gray bg, NOT dark/light split)
3. Fix missing translation keys
4. Fix cases section person photo positioning
5. Fix AI Discovery row layout
6. Add blog images to insights cards
