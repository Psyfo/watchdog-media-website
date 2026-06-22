# Watchdog Media — brand pack

Logo assets, all derived from the negative-space watchdog mark and normalised to
a true circle. See [`/BRAND.md`](../../BRAND.md) for the full system.

## Mark (disc + dog; dog is transparent negative space)

| File              | Use                                  |
| ----------------- | ------------------------------------ |
| `mark-white.svg`  | Dark backgrounds (default site mark) |
| `mark-black.svg`  | Light backgrounds                    |
| `mark-plum.svg`   | Brand-primary on light               |
| `mark-magenta.svg`| Accent / emphasis                    |

> The dog is transparent — show the mark on solid/quiet backgrounds. On busy
> photos, use a **badge** instead.

## Badge (self-contained circle; dog is a solid shape)

| File                 | Use                                    |
| -------------------- | -------------------------------------- |
| `badge-gradient.svg` | **Primary** — favicon, avatar, app icon |
| `badge-magenta.svg`  | Flat magenta alternative               |
| `badge-plum.svg`     | Plum disc, light dog                   |
| `badge-ink.svg`      | Subtle dark badge for light contexts   |

## Raster

| File              | Use                         |
| ----------------- | --------------------------- |
| `avatar-512.png`  | Social profile avatar (512) |

## App icons (wired into the site)

`src/app/icon.svg` · `src/app/favicon.ico` (16/32/48) · `src/app/apple-icon.png`
(180) · `src/app/opengraph-image.jpg` + `twitter-image.jpg` (1200×630).

## Regenerating

These files are generated from `public/images/wm-logo.svg`. The generator lives
in the working dir `.brandtmp/` (git-ignored) and uses `sharp`. The source mark
(`wm-logo.svg`) is the heritage artwork — keep it.
