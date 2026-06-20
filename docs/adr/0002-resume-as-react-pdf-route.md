# Render resume PDF dynamically from site data (2026)

The portfolio's `/resume.pdf` is generated on demand by a Next.js route handler that imports `src/data/*.ts` and produces a PDF with `@react-pdf/renderer`. The previous static `public/resume.pdf` (and the hand-maintained `public/resume.html`) have been removed.

## Why

The site's content (work history, projects, skills, education) already lives in `src/data/*.ts` — the contract that "to change site content, edit the data files, not the components" (CLAUDE.md). The static PDF lived outside that contract, so it drifted: by the time of this ADR, `public/resume.pdf` was ~3 months stale and `public/resume.html` had diverged from `work.ts` (missing the current Freelance/Upwork role). Visitors who downloaded the resume got out-of-date information even when the live site was current.

## Key decisions

- **Server route, not client render** — `app/resume.pdf/route.tsx` (Node.js runtime) returns the PDF bytes directly. The download is a single GET and behaves like a static file from the consumer's perspective.
- **Same URL: `/resume.pdf`** — kept so existing nav/hero links (`href="/resume.pdf"`) need no change and any external bookmarks survive. This required deleting the static `public/resume.pdf`, since Next.js prefers public-dir files over route handlers at the same path.
- **`@react-pdf/renderer`, not Puppeteer/Chromium** — pure JS, no Chromium binary, well under Vercel's serverless size limits, sub-second cold starts. Trade-off: layout is React-PDF's flexbox subset rather than full CSS, so the existing `resume.html` design was rebuilt in React-PDF primitives instead of re-used as-is.
- **Resume-only copy lives in `src/data/resume.ts`** — `tagline`, `summary`, and `languages` aren't shown anywhere on the site itself, so they would have no natural home in the existing data files. Keeping them in `src/data/` preserves the "all content is data-driven" rule.
- **Projects filtered by `featured: true`** — the resume is intentionally curated. Flipping `featured` on a project automatically promotes/demotes it from the resume.
- **Edge-cached per deploy** — `Cache-Control: public, s-maxage=31536000, stale-while-revalidate=86400`. Output is byte-identical within a deploy since all inputs are bundled at build time; Vercel invalidates the cache on each new deploy.

## Trade-offs accepted

- Visual fidelity to the old `resume.html` is approximate, not exact. React-PDF doesn't support CSS Grid or full typography controls (font hinting, ligatures), and ships a fixed default font set. The current implementation uses Times-Roman/Helvetica-Bold (built-in PDF core fonts) rather than registering Georgia/Arial.
- The route runs in Node.js runtime, not Edge — `@react-pdf/renderer` pulls in `fs`/stream APIs.

## Status

accepted.
