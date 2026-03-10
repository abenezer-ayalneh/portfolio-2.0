export interface WorkEntry {
  title: string
  company: {
    name: string
    link: string
  }
  jobType: string
  period: string
  location: string
  description: string[]
  bulletPoints: string[]
}

export const workHistory: WorkEntry[] = [
  {
    title: 'Fullstack Developer',
    company: {
      name: 'Multi Matrix Ltd',
      link: 'https://www.multimatrixlimited.com/',
    },
    jobType: 'Full Time',
    period: 'June 2024 – July 2025',
    location: 'Hong Kong, China (Remote)',
    description: [
      'Worked with the Software Engineering team building frontend applications using Angular, Ionic, and more.',
      'Key responsibilities include:',
    ],
    bulletPoints: [
      'Participating in a white-label based online sports betting project as a frontend Angular developer',
      'Using Ionic paired with Angular 18 - 20+ to create a mobile-first, user-friendly version of the sports betting application',
      'Integrating third-party APIs that provide WebSocket-based real-time updates to the web application',
      'Contributing to the backend application (Nest.js) for issues related to third-party API implementations',
    ],
  },
  {
    title: 'Team Lead / Full-Stack Developer',
    company: {
      name: 'Ablaze Labs',
      link: 'https://ablazelabs.com/',
    },
    jobType: 'Full Time',
    period: 'January 2023 – June 2024',
    location: 'Addis Ababa, Ethiopia (On-site)',
    description: [
      'Led and worked with the Software Engineering team building backend APIs for diverse client needs using Nest.js, React, and more.',
      'Key projects:',
    ],
    bulletPoints: [
      'Led development of a Telegram SaaS bot for an online virtual betting game — multi-tenant, handles payments, and delivers live game result updates',
      'Built reusable microservices (auth, file management, configuration, geo-location, search) — reduced project preparation time for subsequent microservice projects by 40%',
      'Delivered an experimental NewSQL project using SurrealDB + cirql ORM paired with Nest.js, covering simple CRUDs through to complex graph relationships',
    ],
  },
  {
    title: 'Junior Developer',
    company: {
      name: 'BGI Ethiopia',
      link: 'https://bgiethiopia.com/',
    },
    jobType: 'Full Time',
    period: 'April 2021 – January 2023',
    location: 'Addis Ababa, Ethiopia (On-site)',
    description: [
      'Developed web applications for the Application Development team to automate manual, paper-based tasks across company departments using Laravel, PHP, React.js, Blade Template, MySQL, and more.',
      'Key projects:',
    ],
    bulletPoints: [
      'Built a document validation and standardization system used across all departments — reduced the planned standardization timeline by 60% (from 10 months to 4)',
      'Participated in development of an overtime management system handling scheduling and approval across 6 company sites with 450+ employees and a 3-level manager approval workflow',
      'Developed an LDAP-based authentication system for all in-house applications — eliminated 100% of auth-related help desk tickets',
    ],
  },
]
