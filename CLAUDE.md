# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site (Abenezer Ayalneh). Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (Radix). Deployed on Vercel; a `Dockerfile` also exists for container builds.

> Note: the README's "Next.js 15 / React 18 / Tailwind 3" is stale — see the actual versions in `package.json`.

## Commands

Package manager is **pnpm** (pinned via `packageManager`; enable with `corepack enable`).

```bash
pnpm install     # install deps (use --frozen-lockfile in CI/Docker)
pnpm dev         # dev server at http://localhost:3000
pnpm build       # production build
pnpm start       # serve production build
pnpm lint        # eslint . (Next 16 removed `next lint`)
```

There is no test suite. Node 20+ required (`.nvmrc`, `engines`).

## Commit conventions

Commits are enforced by a Husky `commit-msg` hook running **commitlint** with `@commitlint/config-conventional`. Use Conventional Commit messages (`feat:`, `fix:`, `chore:`, etc.) or the hook will reject the commit. Prettier is configured (`singleQuote`, `trailingComma: all`, `semi: true`) but not wired to a pre-commit hook — format manually.

## Architecture

- **Content is data-driven.** All site content lives in `src/data/*.ts` (`work`, `projects`, `education`, `skills`, `social`). Components render from these arrays. To change site content, edit the data files — not the components. `src/data/social.ts` holds `SITE_CONFIG` with runtime endpoints: `formSubmitEndpoint` (contact form posts to FormSubmit.co) and `calendlyUrl` (contact page booking link).

- **Routing** — App Router pages: `/` (`src/app/page.tsx`), `/projects`, `/contact`. `src/app/layout.tsx` is the root: theme provider, navbar, footer, and metadata/SEO.

- **Component layers** under `src/components/`: `ui/` (shadcn primitives — regenerate via shadcn CLI, don't hand-author the API), `sections/` (home-page sections), `layout/` (navbar, footer), plus `contact/`, `projects/`, `shared/`. `shared/section-wrapper.tsx` wraps sections in Framer Motion scroll-entry animations; `shared/theme-toggle.tsx` + `next-themes` drive dark/light mode.

- **Contact form** — `react-hook-form` + Zod (`@hookform/resolvers`) for validation, Sonner for toasts.

- **Styling** — Tailwind **v4**. `src/app/globals.css` is the entry (`@import 'tailwindcss'`) and pulls in the legacy JS theme via `@config '../../tailwind.config.ts'`, which still maps the HSL CSS-variable design tokens (also defined in `globals.css`). PostCSS uses `@tailwindcss/postcss` (autoprefixer is built in). Use `cn()` from `src/lib/utils.ts` to compose classes. shadcn config (`components.json`) uses base color `slate`, RSC, no class prefix.

- **Icons** — `lucide-react` for everything except brand marks. lucide 1.x dropped brand icons, so GitHub/LinkedIn live in `src/components/icons/brand-icons.tsx` (local SVG components mirroring lucide's API). Import those two from there, not `lucide-react`.

- **Linting** — flat config in `eslint.config.mjs` consumes `eslint-config-next`'s native flat exports (`/core-web-vitals`, `/typescript`). ESLint is pinned to v9 because `eslint-config-next` does not yet support ESLint 10.

- **Imports** — use the `@/*` alias (maps to `src/*`).

- **Assets** — `src/assets/` for imported images/icons/fonts; `public/` for static files served at root (e.g. `public/resume.pdf` → `/resume.pdf`, `robots.txt`, `sitemap.xml`).
