export interface SkillCategory {
  category: string
  skills: Skill[]
}

export interface Skill {
  name: string
  icon?: string
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'PHP' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Angular' },
      { name: 'TailwindCSS' },
      { name: 'Ionic' },
      { name: 'NgRx' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Nest.js' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Laravel' },
      { name: 'REST APIs' },
      { name: 'WebSockets' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Prisma' },
      { name: 'Redis' },
    ],
  },
  {
    category: 'Infrastructure & Tools',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Vercel' },
    ],
  },
  {
    category: 'Real-time & Media',
    skills: [
      { name: 'Colyseus' },
      { name: 'LiveKit' },
      { name: 'WebRTC' },
      { name: 'Web Workers' },
    ],
  },
]
