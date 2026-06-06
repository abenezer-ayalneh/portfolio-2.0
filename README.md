# Abenezer Ayalneh — Portfolio

A personal portfolio site built with **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**. It showcases work experience, projects, skills, and provides a contact form with validation.

## Features

- **Dark / light mode** — Theme toggle with `next-themes`; theme persists across sessions
- **Responsive layout** — Single responsive render path (no duplicate mobile/desktop markup); mobile navigation via sheet/sidebar
- **Routing** — Next.js App Router with pages: `/` (home), `/projects`, `/contact`
- **Contact form** — `react-hook-form` + Zod validation, field-level errors, success/error toasts (Sonner)
- **Scroll animations** — Framer Motion entry animations on sections and grids
- **Accessibility** — Semantic HTML, ARIA labels, keyboard-friendly navigation
- **SEO** — Metadata, Open Graph, `robots.txt`, `sitemap.xml`

## Tech Stack

| Category   | Tools |
|-----------|--------|
| Framework | Next.js 16 (App Router), React 19 |
| Language  | TypeScript |
| Styling   | Tailwind CSS v4, shadcn/ui (Radix UI), CSS variables |
| Forms     | react-hook-form, Zod, @hookform/resolvers |
| Animations| Framer Motion |
| UI / UX   | Sonner (toasts), Lucide React (icons) |

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (theme, nav, footer, metadata)
│   ├── page.tsx            # Home (hero, about, skills, experience, education)
│   ├── projects/page.tsx   # Projects listing
│   ├── contact/page.tsx    # Contact form + booking link
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Experience, Education
│   ├── projects/           # ProjectCard
│   ├── contact/            # ContactForm
│   ├── shared/             # SectionWrapper (animations), ThemeToggle
│   └── ui/                 # shadcn-style components (Button, Card, Badge, etc.)
├── data/                   # Content (work, projects, education, skills, social)
└── lib/
    └── utils.ts            # cn() and helpers
```

## Getting Started

### Prerequisites

- **Node.js** 20+ (see `.nvmrc`; Vercel uses this for deployment)
- **pnpm** (the project's package manager; `corepack enable` picks up the pinned version)

### Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build and start (production)

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Deployment (Vercel)

1. Connect the repo to Vercel.
2. **Framework preset:** Next.js (auto-detected).
3. **Node.js version:** 20.x or 24.x (or leave unset; `engines` in `package.json` and `.nvmrc` specify Node 20+).
4. Do **not** set a custom **Output Directory**; Next.js uses its own build output.

## Configuration

- **Contact form** — Submits to FormSubmit.co; endpoint is in `src/data/social.ts` (`SITE_CONFIG.formSubmitEndpoint`).
- **Resume** — Place `resume.pdf` in `public/`; the nav "Resume" button links to `/resume.pdf`.
- **Calendar booking** — Link is in `src/data/social.ts` (`SITE_CONFIG.calendlyUrl`); used on the contact page.

## License

Private / personal use. All rights reserved.
