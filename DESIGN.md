---
version: 2.0
name: alvaroar.es-design-system
author: Álvaro Ares
---

# Design System — alvaroar.es

**Philosophy:** Minimalismo intencional, no minimalismo por defecto. Cada elemento existe porque tiene algo que decir. La ausencia de adornos no es vacío — es confianza.

## Core Idea

Apple's DNA (typography discipline, single accent, generous whitespace) meets editorial boldness (asymmetric moments, texture, unexpected motion). A creative director's portfolio shouldn't look like a template. It should feel like a gallery where the curator's taste is palpable in every empty space.

## Colors

### Accent System
The site uses a switchable accent color with 5 themes. Default is gold.

| Theme | Hex | RGB | Light Surface |
|-------|-----|-----|---------------|
| Gold (default) | `#e8a838` | 232, 168, 56 | `#fdf6e8` |
| Coral | `#e87461` | 232, 116, 97 | `#fdf0ed` |
| Turquoise | `#4abfb0` | 74, 191, 176 | `#edf9f7` |
| Rose | `#d4697a` | 212, 105, 122 | `#fdf0f2` |
| Violet | `#9b87d4` | 155, 135, 212 | `#f4f1fb` |

Applied via CSS custom properties (`--accent`, `--accent-light`, `--accent-rgb`) toggled by `data-theme` on `<html>`.

### Surfaces
- **Canvas** `#ffffff` — primary background
- **Warm** `#faf9f7` — secondary warm surface (posts section)
- **Surface** `#f5f4f2` — cards, elevated elements

### Text
- **Ink** `#1a1a1a` — primary text
- **Muted** `#6b6b6b` — secondary text
- **Ghost** `#a0a0a0` — tertiary, captions, labels

### Borders
- **Border** `#e8e8e8` — standard borders
- **Border Light** `#f0f0f0` — subtle dividers

### Noise & Texture
- **Grain opacity** 2% on fixed overlay
- Applied via SVG noise texture in CSS, not images

## Typography

### Font Stack
- **Display:** SF Pro Display / system-ui — headlines, headings
- **Body:** SF Pro Text / system-ui — paragraphs, labels
- **Accent:** Space Grotesk (self-hosted woff2) — hero badge, section labels, accent moments

### Scale

| Token | Size | Weight | Line Height | Tracking | Usage |
|---|---|---|---|---|---|
| Hero | clamp(32px, 5vw, 56px) | 300 | 1.08 | -0.04em | Hero headline |
| Section | clamp(28px, 3.5vw, 40px) | 300 | 1.08 | -0.04em | Section headline |
| Body | 17px | 400 | 1.5 | -0.374px | Paragraphs |
| Label | 11px | 500 | 1.0 | 0.14px | Uppercase section labels |
| Tag | 10px | 400 | 1.0 | 0.08px | Category tags |
| Button | 12-13px | 500 | 1.0 | -0.2px | CTAs |

**Rule:** Use SF Pro for 90% of text. Space Grotesk appears only for the accent dot badge and section labels. Never mix both in the same sentence.

## Spacing

- Base unit: 8px
- Section padding: 120px vertical (desktop), 72px (mobile)
- Content max-width: 1200px
- Grid gap: 24px (default), 64px (3xl), 48px (2xl)

### Tokens
`xs` 8px / `sm` 12px / `md` 17px / `lg` 24px / `xl` 32px / `2xl` 48px / `3xl` 64px / `section` 120px

## Shapes

- **Card radius:** 18px (`radius-xl`)
- **Button radius:** 8px (`radius-md`) — utility buttons
- **Tag radius:** 4px (`radius-sm`)
- **Pill radius:** 9999px (availability badge only)

## Elevation & Depth

- **No shadows on UI chrome.** Never.
- **Single shadow allowed:** `0 16px 40px rgba(0,0,0,0.06)` — for project cards on hover
- **Depth comes from:** surface color change, not shadow
- **Texture:** 2% grain overlay (fixed, full-screen)
- **Cursor:** Default. No custom cursor.

## Animation

### Philosophy
Motion is punctuation, not decoration. Use it where it helps the user understand hierarchy, not where it entertains.

### Libraries
- **GSAP 3.13** — scroll animations, magnetic effects, mouse tracking
- **Lenis 1.3** — smooth scroll (disabled when `prefers-reduced-motion`)
- **ScrollTrigger** — scroll-driven animations

### Page Load
- Fade in from opacity 0, translateY(20px) → opacity 1, translateY(0)
- Duration: 0.8s
- Ease: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth, snappy)
- Stagger: 0.1s between elements

### Scroll Reveals
- GSAP ScrollTrigger with `start: "top 85%"`
- `fromTo()` with explicit start/end states (no from-only)
- Respect `prefers-reduced-motion` — all GSAP animations wrapped in motion check
- Duration: 0.6s
- Ease: `power3.out`

### Microinteractions
- **Magnetic buttons** — CTA buttons follow cursor with elastic snap-back
- **Magnetic swatches** — theme color picker with scale on hover
- **Hero blob** — accent-colored blur follows mouse position
- **About word-fill** — per-word color transition from ghost to ink on scroll
- **Nav hide/show** — hides on scroll down, shows on scroll up (after 300px)

### Reduced Motion
All GSAP animations are wrapped in `prefers-reduced-motion` check. CSS animations (accent-dot pulse, marquee) are disabled via media query. Lenis smooth scroll is not initialized.

## Components

### Navigation
- Fixed, full-width, z-50
- Background: transparent → `color-mix(in srgb, var(--color-canvas) 85%, transparent)` with `backdrop-filter: blur(20px)` on scroll
- Height: 64px
- Hides on scroll down (after 300px), shows on scroll up
- Name + Work/About/Contact links
- Contact button: ink background, canvas text

### Hero
- Full viewport height (min-h-screen)
- Left: availability badge (accent dot + "Available for hiring"), headline, subtitle, 2 CTAs
- Right: looping video (webm)
- Background: interactive grid with accent blob following mouse
- Bottom: location bar (Born in Bilbao / Based in Barcelona / Working worldwide)

### Work Section
- 4 project showcases with alternating left/right layout
- Each: project card (16:9 image placeholder) + title + description + tags + CTA
- Projects: Koora, Renders, Lapatzak, Lab

### Posts Section
- Horizontal scroll with GSAP ScrollTrigger pinning
- 5 post cards (280px wide, 3:4 aspect)
- Each card links to full post page

### About Section
- Section label + headline + about text with word-fill animation
- Skill tags (Maya, V-Ray, After Effects, Figma, HTML/CSS, AI Workflows)
- "More about me" CTA

### Footer
- Fixed at bottom, z-index: -1 (revealed by scrolling past content)
- Email (large), phone, location, social links
- Dark background (ink), light text

### Theme Switcher
- Fixed bottom-right, z-10000
- Toggle button with accent dot
- Panel with 5 color swatches
- Magnetic hover effects on button and swatches

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
- Desktop: full layout (12-column grid)
- Tablet (<1024px): 2-column grids collapse to 1, padding reduces
- Mobile (<768px): single column, hero text scales via clamp()

## Tech Stack

- **Framework:** Astro 5.7 (static/SSG)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin
- **Animation:** GSAP 3.13 + Lenis 1.3 + ScrollTrigger
- **Font:** Space Grotesk self-hosted (woff2, 40KB)
- **Design tokens:** Tailwind v4 `@theme` block in global.css
- **Theme switching:** CSS custom properties + `data-theme` attribute

## Do's and Don'ts

**Do:**
- Use negative letter-spacing on headlines
- Run body copy at 17px
- Alternate surface colors for rhythm (canvas → warm → surface)
- Use the accent color sparingly — dots, selections, hover states
- Add grain texture via the noise overlay
- Break the grid once per section maximum
- Respect `prefers-reduced-motion`

**Don't:**
- Use gradients as backgrounds
- Add shadows to cards or buttons (except hover)
- Use more than one accent color at a time
- Mix SF Pro and Space Grotesk in the same sentence
- Use parallax (distracts from content)
- Add decorative shapes that don't serve a purpose
- Hardcode colors — use CSS custom properties

## Notes

This is a living document. It will evolve as the site evolves. But the core philosophy — minimalism with intention, bold details that earn their place — is non-negotiable.
