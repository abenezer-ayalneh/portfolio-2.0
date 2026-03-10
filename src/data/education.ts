export interface EducationEntry {
  degree: string
  institution: {
    name: string
    link: string
  }
  period: string
  location: string
  description: string
}

export const education: EducationEntry[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: {
      name: 'Addis Ababa University',
      link: 'http://www.aau.edu.et/',
    },
    period: 'October 2016 – December 2020',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Over 4 years gained a strong foundation in programming concepts, algorithms, data structures, software architecture, and systems design — the bedrock for pursuing a career in software engineering.',
  },
]
