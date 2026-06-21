# Watchdog Media — Brand Guide

A filmmaker company blending corporate clarity with auteur edge. We champion
women's empowerment on- and off-camera.

> **2026 refresh — "Cinematic Editorial Dark".** The brand now lives on an
> obsidian base with high contrast, generous negative space and restrained
> accent colour. This guide reflects the live site. The previous light/lilac
> direction has been retired; lilac survives only as a rare micro-interaction.

## Brand Essence

- Purpose: Tell courageous, craft-driven stories that move business and culture.
- Positioning: Corporate-grade reliability with artist-grade vision.
- Values: Empowerment, Integrity, Craft, Partnership, Accountability.
- Personality: Bold, cinematic, precise, human, inclusive.

## Voice and Tone

- Voice: Confident, clear, candid. No jargon. No fluff.
- Tone by context:
  - Corporate docs: authoritative, concise.
  - Creative pitches: energetic, evocative, visual.
  - Community/empowerment: warm, invitational, respectful.
- Language: people-first and gender-inclusive; credit collaborators by role;
  active verbs, short sentences. Go easy on em dashes.

## Logo

- The mark and wordmark render **monochrome white** on the dark base
  (`filter: brightness(0) invert(1)`). The plum mark is reserved for light
  contexts (print, light-background partners).
- Clear space: at least the height of the "W" on all sides.
- Minimum size: digital ≥ 24 px height; print ≥ 10 mm height.
- Don't: distort, add effects, place on low-contrast or busy backgrounds, or
  alter proportions.

## Colour System

The site is **dark-first**. Surfaces are near-black; colour is used sparingly
and purposefully.

### Surfaces (the canvas)

| Token        | Hex       | Use                                   |
| ------------ | --------- | ------------------------------------- |
| `ink`        | `#08080a` | Primary background, cinematic base    |
| `ink-2`      | `#0d0d11` | Raised sections / alternating bands   |
| `ink-3`      | `#141418` | Cards, media wells                    |
| `ink-4`      | `#1c1c22` | Hairline fills, hover                 |

### Text

| Token    | Hex       | Use                          |
| -------- | --------- | ---------------------------- |
| `silver` | `#eceaef` | Headlines & primary body     |
| `dim`    | `#a4a1aa` | Secondary body / leads       |
| `faint`  | `#6f6c75` | Meta, captions, mono labels  |

### Accents (use with restraint — ~5–10% of a view each)

| Token            | Hex       | Use                                      |
| ---------------- | --------- | ---------------------------------------- |
| `magenta`        | `#ec008c` | **Primary accent** — links, CTAs, marks  |
| `yellow`         | `#fff200` | **Signal** — awards "winner", CTA hover  |
| `plum` / `plum-2`| `#510051` / `#7a1f7a` | Depth, gradient washes       |
| `lilac`          | `#c5a0ff` | Rare soft micro-interactions only        |

Lines use white at 10% (`--wd-line`) / 22% (`--wd-line-strong`).

### Accessibility

- Body text (silver/dim on ink) clears WCAG AA. Never set yellow or magenta as
  long-form body text; use them as accents and on solid fills with black text.
- Buttons: magenta bg + **black** text; yellow bg + black text. Both AA on the
  fill.
- Don't convey meaning by colour alone (award states pair colour + label).
- Visible focus ring is **signal yellow**, 2px, 3px offset.

## Typography

A three-voice system. (Local Noteworthy/Myriad Pro woff2 are retained; Noteworthy
is now optional/legacy via `.wd-script`.)

- **Display — Fraunces** (`--font-display`). High-contrast editorial serif for
  headlines, numbers and pull-quotes. Italics carry the "auteur" voice.
- **Body — Myriad Pro** (`--font-body`, local; system humanist fallback). Clean
  corporate clarity for paragraphs and UI.
- **Mono — DM Mono** (`--font-mono`). Eyebrows/kickers, indices (`01 — 05`),
  timecodes, credits and metadata. Always uppercase with wide tracking for
  labels (the `.wd-kicker` treatment).

### Scale & rhythm

- Display headlines: `clamp()` up to ~8.5rem on the hero; tight leading (~0.95).
- Section titles: 2.5–4rem. Body: 1–1.125rem at 1.6–1.75 line-height.
- Kicker label: 0.72rem, `letter-spacing: 0.28em`, uppercase, magenta.

## Imagery & Motion

### Imagery

- Style: cinematic contrast, natural and motivated light, real texture (grain,
  smoke, practicals). The hero is a woman operating an ARRI — representation is
  the imagery, not a caption on it.
- Composition: rule of thirds; negative space for type; framed aspect ratios
  (square poster wells, 4:5 cards, cinematic bands).
- A faint film-grain overlay (`.wd-grain`) sits over the whole site.
- Avoid: stock clichés, tokenism, over-posed scenes, emoji.

### Motion

- Feel: deliberate, editorial, tactile. Short rise-and-fade reveals on scroll
  (`Reveal`), once. No perpetual gimmick loops.
- All motion respects `prefers-reduced-motion`.

## UI Components

- **Buttons** (`Button.tsx`): `primary` (magenta→yellow on hover), `yellow`,
  `plum`, `ghost` (hairline → magenta). Labels are mono, uppercase, tracked.
- **Cards / wells**: `ink`/`ink-2` fills separated by 1px white/10 "grid gap"
  borders for that editorial table feel.
- **Forms**: `ink-2` fields, white/15 border, magenta focus border + ring.
  Custom inline validation (no native HTML5 bubbles); errors in `#ff8095`,
  `role="alert"`, `aria-invalid`/`aria-describedby`. Honeypot on the contact
  form.
- **Eyebrow/Kicker** (`Kicker.tsx`): hairline + mono label, optional index.

## Design Tokens

Defined in `src/styles/globals.css` via Tailwind v4 `@theme` (utilities like
`bg-ink`, `text-magenta`, `font-display`) plus `--wd-*` palette vars for
gradients and email parity. Fonts are wired through `next/font` in
`src/app/layout.tsx`.

## Governance

- Review cadence: quarterly visual audit; monthly content + accessibility check.
- Ownership: Creative Director (visual), Head of Production (editorial), Head of
  Development & DEI (representation).
- Single source of truth for site content/links: `src/lib/site.ts`.
