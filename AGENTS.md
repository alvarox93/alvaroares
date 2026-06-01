# AGENTS.md — alvaroar.es Portfolio

## Project Overview
Portfolio for Álvaro Ares — Creative Director, CGI artist, motion designer, brand builder, and accidental programmer. Target: senior roles at companies like Codeway (tech/AI) and BCome (branding/product).

## Design Direction
**BOLD. Personal. Specific.** Not another Apple-clone portfolio. This is a creative director's site — it should feel like one. Warm, confident, a bit informal. Typography has weight. Copy has personality. Layout breathes but doesn't whisper.

## Architecture
- **Framework**: Astro 5.7 + Tailwind CSS v4 + GSAP 3.13 + Lenis 1.3
- **Pages**:
  - `/` — Hero (name, available for hiring) + 4 project cards + posts + footer
  - `/koora` — Koora.studio case study (CGI, Motion, Direction)
  - `/renders` — Food & Product 3D renders niche
  - `/lapatzak` — Lapatzak brand/product case study
  - `/lab` — Lab: UI, AI, New Tech
  - `/about` — About + contact CTA + download CV
- **Components**: `src/components/`
- **Styles**: `src/styles/global.css`
- **Layouts**: `src/layouts/BaseLayout.astro`

## The 4 Projects
1. **Koora.studio** — 8 years of CGI, motion, creative direction. The studio chapter.
2. **Renders** — Food & product 3D rendering niche. Photoreal CGI that sells before it exists.
3. **Lapatzak** — Own brand end-to-end. Identity, packaging, e-commerce.
4. **Lab** — UI, AI workflows, interactive systems, frontend logic. The tech bridge.

## Copy Rules
- English first
- Talk like a human, not a LinkedIn post
- Be specific: "Maya + V-Ray" not "industry-standard tools"
- Short paragraphs, bold for scanning
- No corporate buzzwords: no "leverage", "synergy", "holistic", "passionate"
- Show confidence without arrogance

## Key Rules
- NEVER close the dev server (`npm run dev`)
- Build verify: `npm run build`
- Path aliases: `@components/`, `@layouts/`, `@styles/`
- Respect `prefers-reduced-motion`
- Images are placeholders

## Status
- [x] Initial build
- [x] Multi-page restructure
- [x] Accent color switcher
- [x] Footer with email animation
- [x] Horizontal scroll posts
- [ ] Bold redesign with personality
- [ ] 4th project (Renders)
- [ ] Dashboard-style project pages
- [ ] Real content and images
