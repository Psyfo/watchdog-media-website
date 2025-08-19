# Watchdog Media — Brand Guide

A filmmaker company blending corporate clarity with auteur edge. We champion women’s empowerment on- and off-camera.

## Brand Essence

- Purpose: Tell courageous, craft-driven stories that move business and culture.
- Positioning: Corporate-grade reliability with artist-grade vision.
- Values: Empowerment, Integrity, Craft, Partnership, Accountability.
- Personality: Bold, cinematic, precise, human, inclusive.

## Voice and Tone

- Voice: Confident, clear, and candid. No jargon. No fluff.
- Tone by context:
  - Corporate docs: authoritative, concise.
  - Creative pitches: energetic, evocative, visual.
  - Community/empowerment: warm, invitational, respectful.
- Language guidelines:
  - Use people-first, gender-inclusive language.
  - Credit collaborators equitably; spotlight women and underrepresented voices.
  - Prefer active verbs and short sentences.

## Logo Usage

- Clear space: at least the height of the “W” on all sides.
- Minimum size: digital ≥ 24 px height; print ≥ 10 mm height.
- Color:
  - On dark: use light/neutral (Silver) or knockout.
  - On light: use Black or Plum (brand primary).
- Don’t: distort, add effects, place on low-contrast backgrounds, or alter proportions.

## Color System

Primary and neutrals

- Obsidian Black — #000000 (Primary background, cinematic base)
- Slate Grey — #4C4C4C (UI chrome, dividers, secondary text)
- Silver — #D9D9D9 (Body text on dark, surfaces, rules)

Brand accents

- Plum Noir — #510051 (Primary brand color, headings, overlays)
- Magenta — #EC008C (Call-to-action, emphasis, links hover/active)
- Signal Yellow — #FFF200 (Highlights, badges, warnings, key metrics)

Usage guidance

- Base surfaces: 70–80% Black, 10–15% Slate, 10–20% Silver.
- Accents: keep Magenta and Yellow purposeful (5–10% each on a page).
- Pairings (aim for WCAG AA):
  - Text: Silver on Black (body), Silver on Plum (body/overlays).
  - Headlines: Yellow or Silver on Black/Plum; Magenta on Black for emphasis.
  - Buttons: Magenta bg + Black text; Yellow bg + Black text; Plum bg + Silver text.

Accessibility

- Minimum contrast: 4.5:1 for body text, 3:1 for large text (≥18pt/24px or 14pt/18.66px bold).
- Don’t convey meaning by color alone; add icons/labels.

## Typography

Primary fonts

- Headings: Noteworthy
- Body: Myriad Pro

Recommended fallbacks (web-safe stack)

- Headings stack: "Noteworthy", "Patrick Hand", "Caveat", "Bradley Hand", "Segoe Print", cursive
- Body stack: "Myriad Pro", "Segoe UI", Roboto, Helvetica, Arial, sans-serif

Scale and rhythm

- Base size: 16px; line-height: 1.5 body, 1.2–1.3 headings.
- Sizes:
  - H1: 48–64px
  - H2: 36–48px
  - H3: 28–32px
  - H4: 22–24px
  - Body: 16–18px
  - Small: 14px
- Usage:
  - Use Noteworthy for H1–H3 and key pull-quotes.
  - Use Myriad Pro (or fallback) for paragraphs, UI, long-form.

## Imagery and Motion

Imagery

- Style: cinematic contrast, natural light, texture (grain, lens flare minimal).
- Subjects: strong, authentic portraits; women leading—directing, operating, negotiating.
- Composition: rule of thirds; negative space for type; 16:9 frames preferred.
- Avoid: stock clichés, tokenism, over-posed scenes.

Motion

- Feel: deliberate, editorial, tactile.
- Transitions: hard cuts, match cuts, simple wipes; avoid gimmicks.
- Logo reveals: subtle wipe or film-burn inspired glow under 600ms.

## UI Components (Examples)

Buttons

- Primary: Magenta bg (#EC008C), Black text, hover: Plum (#510051) bg + Silver text.
- Secondary: Yellow bg (#FFF200), Black text, hover: Slate (#4C4C4C) bg + Silver text.
- Tertiary: Text button in Magenta; hover underline.

Links

- Default: Magenta; hover: Yellow; visited: Slate.
- Underline on hover and focus; provide 2px focus ring in Yellow.

Cards/Surfaces

- Dark surface: Slate bg, 8–12px radius, 1px border in Silver at 20% opacity.
- Elevation: soft shadow or 1px border; prefer border on dark themes.

Forms

- Inputs: Slate bg, Silver text, 1px Silver border (40% opacity); focus ring Yellow.

## Grids and Spacing

- Grid: 12-column, 72/80/96px max gutters on desktop; 16/24px on mobile.
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64.
- Corner radius: 8px default; 12px for media thumbnails.

## Editorial Guidelines

- Credit women and underrepresented crew visibly in captions and case studies.
- Always include consent and context for sensitive stories.
- Use inclusive alt text for images; name roles (e.g., “DP,” “Producer”).

## Do / Don’t

- Do: pair Magenta or Yellow with generous negative space.
- Do: keep copy concise and active.
- Do: use Silver for body text on dark backgrounds.
- Don’t: place Yellow text on Silver or Slate.
- Don’t: overuse Magenta as background for long-form content.
- Don’t: rely on color alone for error/success states.

## Design Tokens (CSS)

```css
:root {
  /* Color */
  --wd-black: #000000;
  --wd-slate: #4C4C4C;
  --wd-plum: #510051;
  --wd-silver: #D9D9D9;
  --wd-magenta: #EC008C;
  --wd-yellow: #FFF200;

  /* Semantic */
  --wd-bg: var(--wd-black);
  --wd-surface: var(--wd-slate);
  --wd-text: var(--wd-silver);
  --wd-text-inverse: var(--wd-black);
  --wd-primary: var(--wd-plum);
  --wd-accent-1: var(--wd-magenta);
  --wd-accent-2: var(--wd-yellow);
  --wd-border: color-mix(in oklab, var(--wd-silver) 35%, transparent);

  /* Typography */
  --wd-font-heading: "Noteworthy", "Patrick Hand", "Caveat", "Bradley Hand", "Segoe Print", cursive;
  --wd-font-body: "Myriad Pro", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --wd-font-size-base: 16px;
  --wd-line-body: 1.5;
  --wd-line-heading: 1.25;

  /* Spacing */
  --wd-space-1: 4px;
  --wd-space-2: 8px;
  --wd-space-3: 12px;
  --wd-space-4: 16px;
  --wd-space-5: 24px;
  --wd-space-6: 32px;
  --wd-space-7: 48px;
  --wd-space-8: 64px;
}

/* Examples */
body {
  background: var(--wd-bg);
  color: var(--wd-text);
  font-family: var(--wd-font-body);
  font-size: var(--wd-font-size-base);
  line-height: var(--wd-line-body);
}

h1, h2, h3, h4 {
  font-family: var(--wd-font-heading);
  line-height: var(--wd-line-heading);
  color: var(--wd-silver);
}

.button--primary {
  background: var(--wd-magenta);
  color: var(--wd-text-inverse);
  border: 1px solid transparent;
}
.button--primary:hover { background: var(--wd-plum); color: var(--wd-silver); }

.button--secondary {
  background: var(--wd-yellow);
  color: var(--wd-text-inverse);
}
a { color: var(--wd-magenta); }
a:hover, a:focus { color: var(--wd-yellow); text-decoration: underline; outline: 2px solid var(--wd-yellow); outline-offset: 2px; }
```

## Governance

- Review cadence: quarterly visual audit; monthly content and accessibility checks.
- Ownership: Creative Director (visual), Head of Production (editorial), DEI lead (representation).
  
```// filepath: c:\dev\watchdog-media-website\BRAND.md

