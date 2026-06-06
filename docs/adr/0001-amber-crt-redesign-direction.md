# Amber-CRT redesign direction (2026)

We are redesigning the portfolio taking inspiration from the Hermes Agent site (dark, bold, clean) but **deliberately diverging from its cool restraint**: the signature is a single warm **amber/orange Accent** (`#FF6B35`/`#F59E0B`, deepened to ~`#EA580C` in light mode) on a near-monochrome **Base**, retiring the old lime-green. We keep a **dark-first** theme with the light toggle intact (both Accent and Base defined for both themes).

## Key decisions

- **Type system**: Space Grotesk (display/headlines), Inter (body), JetBrains Mono (the "Terminal motif" — labels, eyebrows, nav, tags).
- **Terminal motif is moderate** — a garnish (mono labels, command-prompt flourishes), not a literal full-terminal site.
- **CRT scanlines/vignette are contained to the hero** (the "Split hero" terminal panel + hero backdrop). Content sections stay clean for readability — this was the explicit trade-off against full-page scanlines, made to protect recruiters skimming experience/project copy.
- **Navigation stays multi-page** (`/`, `/projects`, `/contact`) rather than collapsing to a single-page scroll, despite the reference being single-page.
- **Projects use alternating Feature rows with real screenshots** (user-supplied), not a uniform card grid; a framed placeholder ships until assets land.
- **Booking dropped from contact** — the old `SITE_CONFIG.calendlyUrl` was a placeholder (`https://cal.com`) pointing at a marketing page; the redesigned contact is form-only.
- **Motion is "rich/showcase"** (staggered reveals, parallax, animated Stats-strip counters, magnetic buttons), all gated behind `prefers-reduced-motion`.

## Status

accepted — execution is phased: (1) visual system + fonts + CRT primitives + navbar/footer + Split hero for review, then (2) sections, then (3) contact + polish.
