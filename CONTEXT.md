# Portfolio Design Language

Shared vocabulary for the 2026 redesign of Abenezer Ayalneh's personal portfolio. The redesign takes inspiration from the Hermes Agent site (dark, bold, clean) but adapts it with a warm signature accent. This glossary fixes the terms we use when discussing the design so they stay consistent across components and data.

## Language

**Accent**:
The single warm amber/orange highlight (`#FF6B35`/`#F59E0B` family; deepened toward `#EA580C` in light mode) used sparingly for CTAs, links, focus rings, and key emphasis.
_Avoid_: primary color, brand green, lime (the old green accent is retired).

**Base**:
The near-monochrome neutral foundation — near-black in dark mode, clean white in light mode — against which the Accent is applied. Discipline here is what keeps a bold accent feeling "clean".
_Avoid_: background (too generic; Base means the whole neutral system, not one token).

**Terminal motif**:
The moderate, accent-only developer/CLI flavor: monospace for labels, eyebrows, nav, metadata, and tech-stack tags, plus subtle command-prompt flourishes — while headlines and body stay in clean sans. A garnish, not a costume.
_Avoid_: terminal theme, CLI mode (implies the full-window literal-terminal treatment we explicitly rejected).

**Dark-first**:
Dark is the default load and the design's hero treatment; a polished light variant still ships behind the theme toggle. Both Accent and Base must be defined for both themes.
_Avoid_: dark-only, dark mode default (the toggle is staying).

**Split hero**:
The home hero: a Space Grotesk statement on one side and a CRT-styled [[terminal-motif]] panel on the other (stacks vertically on mobile). The only place the full scanline/CRT treatment is applied — content sections stay clean.
_Avoid_: terminal hero, CRT page (the CRT is contained to the hero, not site-wide).

**Feature row**:
A full-width, alternating left/right project block on `/projects` (and the home teaser): a framed real screenshot — or a [[gallery]] of them — on one side, title + problem→solution + mono tech tags + live/code links on the other.
_Avoid_: project card (reserved for any smaller uniform-grid tile; the redesign uses Feature rows, not cards).

**Gallery**:
The swipeable set of real screenshots inside a [[feature-row]]'s framed visual panel, with left/right arrows and a dot page indicator. Driven by the project's `images`; falls back to the branded placeholder when a project has none. Never auto-advances.
_Avoid_: carousel, slider, slideshow (carousel is the underlying shadcn/embla primitive, not the design term).

**Stats strip**:
A compact row of animated counters (years of experience, companies, projects) used to feed the "rich/showcase" motion. Numbers come from the data files.
_Avoid_: metrics, counters band.

**CTA band**:
The full-width contact call-to-action that closes the home page and links to `/contact`. Contact uses the redesigned form only — no booking widget.
_Avoid_: contact section (on home it's a band/teaser, not the full contact form).
