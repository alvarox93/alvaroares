---
version: 1.0
name: alvaroar.es-design-system
author: Álvaro Ares
---

# Design System — alvaroar.es

**Philosophy:** Minimalismo intencional, no minimalismo por defecto. Cada elemento existe porque tiene algo que decir. La ausencia de adornos no es vacío — es confianza.

## Core Idea

Apple's DNA (typography discipline, single accent, generous whitespace) meets editorial boldness (asymmetric moments, texture, unexpected motion). A creative director's portfolio shouldn't look like a template. It should feel like a gallery where the curator's taste is palpable in every empty space.

## Colors

### Primary
- **Action Blue** `#0066cc` — interactive elements, links, CTAs
- **Focus Blue** `#0071e3` — focus states
- **Sky Blue** `#2997ff` — links on dark surfaces

### Surfaces
- **Canvas** `#ffffff` — primary background
- **Parchment** `#f5f5f7` — secondary light surface
- **Pearl** `#fafafc` — ghost buttons
- **Ink** `#1d1d1f` — primary text
- **Void** `#000000` — true black, hero moments
- **Tile 1** `#272729` — dark section base
- **Tile 2** `#2a2a2c` — dark section variation
- **Tile 3** `#252527` — dark section accent

### Text
- **Ink** `#1d1d1f` — all text on light
- **Muted** `#666666` — secondary text on light
- **Ghost** `#999999` — tertiary, captions
- **On Dark** `#ffffff` — all text on dark
- **On Dark Muted** `#cccccc` — secondary on dark

### Noise & Texture
- **Grain opacity** 2-4% on dark tiles
- **Grain color** white on dark, black on light
- Applied via CSS noise texture, not images

## Typography

### Font Stack
- **Primary:** SF Pro Display / system-ui — headlines, UI
- **Body:** SF Pro Text / system-ui — paragraphs, labels
- **Accent:** Space Grotesk (Google Fonts) — used sparingly for hero numbers, section labels, or moments that need to feel "designed" rather than "system"
- **Mono:** SF Mono — code snippets, metadata

### Scale

| Token | Size | Weight | Line Height | Tracking | Usage |
|---|---|---|---|---|---|
| Display XL | clamp(48px, 8vw, 96px) | 600 | 1.05 | -0.03em | Hero headline |
| Display L | 56px | 600 | 1.07 | -0.28px | Section headline |
| Display M | 40px | 600 | 1.10 | 0 | Tile headline |
| Lead | 28px | 400 | 1.14 | 0.196px | Subcopy |
| Body | 17px | 400 | 1.47 | -0.374px | Paragraphs |
| Label | 12px | 500 | 1.0 | 0.12px | Tags, uppercase labels |
| Accent XL | clamp(48px, 8vw, 96px) | 700 | 1.0 | -0.04em | Hero numbers, Space Grotesk |
| Accent L | 56px | 700 | 1.0 | -0.02em | Section numbers, Space Grotesk |

**Rule:** Use SF Pro for 90% of text. Space Grotesk appears only for numbers, labels, or single words that need to feel like "graphic design" rather than "UI text". Never mix both in the same sentence.

## Spacing

- Base unit: 8px
- Section padding: 120px vertical (desktop), 80px (mobile)
- Content max-width: 1200px
- Hero content: 980px
- Grid gap: 24px
- Tile internal padding: 80px

## Shapes

- **Tile radius:** 0 (edge-to-edge)
- **Card radius:** 18px
- **Pill radius:** 9999px (CTAs only)
- **Button radius:** 8px (utility buttons)

## Elevation & Depth

- **No shadows on UI chrome.** Never.
- **Single shadow allowed:** `0 20px 60px rgba(0,0,0,0.15)` — for project images only
- **Depth comes from:** surface color change, not shadow
- **Texture:** 2-4% grain overlay on dark tiles
- **Cursor:** Default. No custom cursor (distracts from content).

## Animation

### Philosophy
Motion is punctuation, not decoration. Use it where it helps the user understand hierarchy, not where it entertains.

### Page Load
- Fade in from opacity 0, translateY(20px) → opacity 1, translateY(0)
- Duration: 0.8s
- Ease: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth, snappy)
- Stagger: 0.1s between elements

### Scroll Reveals
- GSAP ScrollTrigger with `start: "top 85%"`
- `fromTo()` with explicit start/end states (no from-only)
- Respect `prefers-reduced-motion`
- Duration: 0.6s
- Ease: `power3.out`

### Microinteractions
- Hover links: opacity 0.6, transition 0.2s
- Active buttons: `transform: scale(0.97)`, transition 0.1s
- Focus: 2px solid Focus Blue outline

## Components

### Navigation
- Fixed, full-width
- Background: transparent → `rgba(255,255,255,0.8)` with `backdrop-filter: blur(20px)` on scroll
- Height: 64px
- Links: Body size, weight 400, tracking -0.374px
- No logo icon. Name is the brand.

### Hero
- Full viewport height (100vh)
- Centered content, max-width 980px
- Optional: single asymmetric element (a number, a label, a line) offset from center by 10-15%
- No background image. Color is the background.

### Section Tiles
- Full-width, edge-to-edge
- Alternate: Canvas → Tile 1 → Parchment → Tile 2
- Each tile is a self-contained world
- Padding: 120px vertical

### Project Card
- Aspect ratio: 16:9 or 1:1
- Radius: 18px
- Image with `overflow: hidden`, scale 1.02 on hover
- Title below image, no card background
- No shadow by default; shadow appears on hover

### CTA Button
- Primary: Action Blue background, white text, pill radius
- Secondary: transparent, Action Blue text, 1px Action Blue border, pill radius
- Tertiary: Ink background, white text, 8px radius (utility)

### Label / Tag
- Uppercase, 12px, weight 500, tracking 0.12px
- Color: Muted or Ghost
- No background, no border. Just text.

## Layout Principles

### The "Broken Grid" Rule
90% of the layout follows a strict grid. 10% breaks it intentionally:
- A number offset from its container
- A line that extends beyond the grid
- An image that bleeds into the next section
- A label that sits in the margin, not the column

### Whitespace
Whitespace is not empty. It is the voice of the designer saying "this matters enough to give it room to breathe."

- Minimum 80px between unrelated elements
- Minimum 40px between related elements
- No two headlines without at least 24px of air

### Responsive
- Desktop: full layout
- Tablet (<1024px): 2-column grids collapse to 1, padding reduces to 80px
- Mobile (<768px): single column, padding 48px, hero text scales via clamp()

## Do's and Don'ts

**Do:**
- Use negative letter-spacing on headlines
- Run body copy at 17px
- Alternate tile surfaces for rhythm
- Use Space Grotesk for single impactful words or numbers
- Add grain texture to dark tiles
- Break the grid once per section maximum

**Don't:**
- Use gradients as backgrounds
- Add shadows to cards or buttons
- Use more than one accent color
- Mix SF Pro and Space Grotesk in the same sentence
- Use parallax (distracts from content)
- Add decorative shapes that don't serve a purpose
- Use weight 500 (the ladder is 300/400/600/700)

## Notes

This is a living document. It will evolve as the site evolves. But the core philosophy — minimalism with intention, bold details that earn their place — is non-negotiable.
