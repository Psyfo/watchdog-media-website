# Watchdog Media — Website

Marketing site for Watchdog Media (Pty) Ltd — a Durban-based film production
support and creative company. Built around a **cinematic editorial dark**
design system.

- **Framework:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- **Styling:** Tailwind CSS v4 (`@theme`) + custom design tokens
- **Type:** Fraunces (display) · Myriad Pro (body, local) · DM Mono (labels)
- **Motion:** Framer Motion (deliberate, reduced-motion aware)
- **Secrets/deploy:** Doppler · Vercel

See [`BRAND.md`](./BRAND.md) for the design system and
[`OVERHAUL.md`](./OVERHAUL.md) for the redesign rationale and scope.

## Getting started

Secrets live in Doppler (project `watchdog-media-website`). Run through Doppler
so env vars are injected:

```bash
doppler run -- npm run dev      # http://localhost:3000
```

Plain `npm run dev` also works — the contact form just falls back to logging
submissions to the console (see below). See [`.env.example`](./.env.example)
for the variable shape.

```bash
npm run build      # production build (the quality gate — must pass before push)
npm run start      # serve the production build
npm run lint
```

## Project structure

```
src/
  app/
    (public)/            # routes: home, about, services, productions,
                         #         people, awards, contact, privacy, terms,
                         #         accessibility
    components/          # home-page section components
    api/contact/route.ts # contact form handler (SMTP + console fallback)
    layout.tsx           # fonts, metadata, grain, skip link
    not-found.tsx        # styled 404
  components/
    ui/                  # Container, Section, Reveal, Kicker, Button, PageHeader
    Navbar.tsx, Footer.tsx, ProductionCard.tsx
  lib/site.ts            # SINGLE SOURCE OF TRUTH for content + links
  styles/globals.css     # design tokens (@theme), base, utilities
```

## Editing content

Almost everything — nav, services, productions, people, awards, press, contact
details and footer link groups — lives in **`src/lib/site.ts`**. Footer and page
links are derived from this data, so they never go stale or dead. Production key
art lives in `public/images/poster-*.png`.

## Contact form & email

`src/app/api/contact/route.ts` is a provider-agnostic SMTP handler.

- **ZeptoMail (intended):** set `MAIL_HOST=smtp.zeptomail.com`,
  `MAIL_USER=emailapikey`, `MAIL_PASSWORD=<send-mail token>`,
  `MAIL_FROM_EMAIL=<verified sender>`. Optionally `MAIL_TO` for the destination
  inbox.
- **No/failed mail config:** the submission is logged to the server console as
  JSON and the request still succeeds, so dev/preview never blocks.
- Server-side validation, input sanitising and a honeypot are built in.

## Deployment

Deploys through **Vercel** (git integration). Production secrets come from the
Doppler `prd` config. Image optimisation runs on Vercel for the poster/hero
PNGs.
