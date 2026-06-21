# Watchdog Media — Site Overhaul

Working doc for the full visual + content overhaul (branch `feat/site-overhaul`, off `master`).

## Direction: "Cinematic Editorial Dark"

The brand guide describes a **bold, cinematic, precise** filmmaker company. The
master site contradicted that with a light, pastel, lilac‑gradient treatment and
emoji cards. This overhaul commits fully to the brand's actual essence.

- **Dark‑first.** Obsidian black base, high contrast, generous negative space.
- **Accents with restraint.** Magenta = primary accent, Signal Yellow = sharp
  highlight, Plum = depth, Silver = body text. Lilac demoted to subtle
  micro‑interactions only (as the brand itself prescribes).
- **Type.** Display = **Fraunces** (high‑contrast editorial serif, auteur edge).
  Body = **Myriad Pro** (local, corporate clarity). Labels/indices/credits =
  **DM Mono** (film‑slate technical voice). Noteworthy retired from heavy use.
- **Motion.** Deliberate, editorial reveals (`whileInView`, `once`), film grain,
  one restrained marquee. No perpetual gimmick loops. Respects reduced‑motion.
- **Film language.** Numbered indices (01–04), timecodes, thin rules, tracked
  uppercase eyebrows, framed aspect ratios, grain overlay.

## Architecture

- `src/lib/site.ts` — single source of truth (company, nav, services,
  productions, people, awards, press, socials). Kills dead links + duplication.
- `src/components/ui/` — Container, Section, Kicker, Button, Reveal, Grain,
  Marquee, Field.
- `src/styles/globals.css` — dark cinematic tokens + Tailwind v4 `@theme`.
- `src/app/layout.tsx` — fonts, metadataBase, grain, skip link.

## Scope (every section gets real treatment — no stubs, no dead links) — ✅ DONE

- [x] Foundation: tokens, fonts, data layer, UI primitives
- [x] Navbar + Footer (dark, all links wired to real targets)
- [x] Home: hero, intro, production‑support process, creative services,
      selected work, empowerment band, awards strip
- [x] About page
- [x] Services page (anchored sections matching footer: production-support,
      location-support, directing, key-crew, creative)
- [x] Productions page (4 real posters + credits, anchored by slug)
- [x] People page
- [x] Awards & Press page
- [x] Contact page + API (ZeptoMail‑ready SMTP, console fallback, honeypot)
- [x] Legal/info pages: Privacy, Terms, Accessibility
- [x] 404 restyle
- [x] Removed broken components (ProductionItem/ServiceCard/TextBlock)
- [x] Fixed SVG logos (served `unoptimized`; `next/image` 400s on SVG)

## Verification (screenshot tool is unavailable in this env — timed out on
every codebase, dev + prod, so verified by other means)

- `npm run build` (Turbopack) — green, all 12 routes prerender, TS clean.
- `curl` — every route 200 (bad URL → styled 404); content + posters render;
  compiled CSS contains the `@theme` tokens and Fraunces.
- Contact API — valid → 200; honeypot → 200 silent drop; invalid → 400;
  dead Zoho creds → JSON logged to console + 200 (fallback works as designed).

## Infra status

- Doppler: MAIL_* uploaded to `dev` + `prd`. (Existing Zoho creds are dead —
  535 auth fail — so switch to ZeptoMail per `.env.example`.)

## Infra

- Email: provider‑agnostic SMTP in `/api/contact`. Works with ZeptoMail by
  setting `MAIL_HOST=smtp.zeptomail.com`, `MAIL_USER=emailapikey`,
  `MAIL_PASSWORD=<send-mail-token>`. If unconfigured or send fails → log JSON to
  console and still succeed (so dev/preview never blocks).
- Doppler: project `watchdog-media-website` exists (dev/stg/prd). Push the
  `.env.local` MAIL_* vars up to `dev` + `prd`.
- Update BRAND.md to the new system. Add README.

## Quality gate

`npm run build` (Turbopack) must pass before any commit/push. Land work as
atomic, logically‑grouped commits at the end.
