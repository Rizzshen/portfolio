# Rishen Manandhar — Portfolio

Static site built with Astro. Structure and visual system are locked; see notes below for what's stubbed and what's next.

## Setup

```bash
npm install
npm run dev
```

## What's here

- 4 sections, single scroll: Hero → Work → About → Contact (`src/components/`)
- Design tokens in `src/styles/global.css` — dark charcoal base, amber accent, single font family (Inter, loaded via system stack for now)
- Content is real (from your resume) but placeholder live links (`#`) on Hestia/Kharcha — swap in actual URLs
- `resume.pdf` referenced in Hero but not included — drop your resume PDF into `public/resume.pdf`

## Not yet built (next steps)

- Custom cursor (accent-colored, hover scale/glow)
- Scroll-triggered reveals per section (Intersection Observer)
- Background treatment (gradient mesh / subtle canvas texture)
- Self-hosted Inter font files (currently falling back to system font stack — swap in `@font-face` with woff2 files for the real typeface)
