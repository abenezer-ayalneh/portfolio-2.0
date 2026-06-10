export interface ProjectEntry {
  title: string
  shortDescription: string
  description: string
  problem: string
  solution: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  /**
   * Path to a screenshot under `public/` (e.g. `/projects/lynx.png`), shown in
   * the visual half of the feature row. When omitted, a branded placeholder is
   * rendered instead — drop the image in and set this to upgrade.
   */
  image?: string
}

export const projects: ProjectEntry[] = [
  {
    title: 'Lynx — Word Guessing Game',
    shortDescription: 'A real-time multiplayer word guessing game with voice communication.',
    description:
      'A fun game playable solo or with friends. Shows cue words with one common answer that players must guess. Supports real-time multiplayer and WebRTC-based voice chat between players.',
    problem:
      'Classic word games lack real-time social interaction, making remote play feel disconnected and less engaging.',
    solution:
      'Built a synchronized multiplayer experience using Colyseus for real-time game state and LiveKit for WebRTC voice communication, enabling a fully social gameplay loop.',
    techStack: [
      'Angular',
      'TailwindCSS',
      'NgRx SignalStore',
      'Nest.js',
      'Node.js',
      'TypeScript',
      'Colyseus',
      'LiveKit',
      'PostgreSQL',
      'Prisma',
      'Docker',
      'nginx',
    ],
    liveUrl: 'https://gametrix.org',
    featured: true,
  },
  {
    title: 'Triads — Word Puzzle Game',
    shortDescription: 'A word puzzle game where players find hidden keywords connecting groups of three cue words.',
    description:
      'A single-player word puzzle game where 9 physics-driven floating word bubbles are shown on screen. Players must identify which groups of 3 cues share a hidden keyword (e.g. "SECOND-", "POKER", "SHAKE" → HAND). Solving the 3 initial triads unlocks a bonus 4th round where the discovered keywords become the new cues. Features difficulty levels, a hint system, score tracking, and lifetime statistics. Playable on web, iOS, and Android.',
    problem:
      'Word puzzle games often feel static and visually flat, with no sense of physicality or progression — and most require account creation just to play.',
    solution:
      'Built a fully accountless experience with physics-based floating bubbles (Matter.js) and fluid GSAP animations to make the puzzle feel alive. All player identity and statistics are stored locally, removing any friction to start playing. The backend stays stateless per player, focusing purely on serving and validating puzzle content.',
    techStack: [
      'Angular',
      'TailwindCSS',
      'DaisyUI',
      'NgRx Signals',
      'Capacitor',
      'Ionic',
      'Matter.js',
      'GSAP',
      'AG Charts',
      'Nest.js',
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Docker',
      'PM2',
    ],
    liveUrl: 'https://triads.gametrix.org',
    featured: true,
  },
  {
    title: 'White-Label Sports Betting Platform',
    shortDescription: 'A fully-featured mobile-first sports betting application.',
    description:
      'A production-grade sports betting application supporting real-time price updates, bet placement, bet history, and a mobile-first responsive UI for a white-label client.',
    problem:
      'The client needed a white-label based sports betting frontend that could be skinned for multiple brands while supporting real-time market data over WebSockets.',
    solution:
      'Engineered an Angular + Ionic hybrid application with NgRx SignalStore for reactive state management and Web Workers for off-thread WebSocket processing, ensuring smooth UI performance under high-frequency data updates.',
    techStack: [
      'Angular',
      'Ionic',
      'TypeScript',
      'NgRx SignalStore',
      'TailwindCSS',
      'WebSocket',
      'Web Workers',
    ],
    liveUrl: 'https://m.freedemokit.com',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    shortDescription: 'This portfolio — built with Next.js, shadcn/ui, and Framer Motion.',
    description:
      'A personal portfolio site built to showcase projects, work history, and skills. Designed with a focus on accessibility, performance, and modern UI/UX.',
    problem:
      'The previous portfolio was a Vite SPA with no routing, duplicated rendering logic, and no dark mode or accessibility support.',
    solution:
      'Migrated to Next.js 15 (App Router) with shadcn/ui components, next-themes for dark/light mode, react-hook-form + Zod for form validation, and Framer Motion for scroll-triggered animations.',
    techStack: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'shadcn/ui', 'Framer Motion', 'Zod'],
    liveUrl: 'https://abenezer-ayalneh.dev',
    featured: false,
  },
]
