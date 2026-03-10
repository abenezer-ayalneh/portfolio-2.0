import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'

export const metadata: Metadata = {
  title: 'Abenezer Ayalneh — Full-Stack Developer',
  description:
    'Full-Stack Developer with 5+ years of experience building scalable web applications using TypeScript, Angular, React, and Nest.js.',
  alternates: {
    canonical: 'https://abenezer-ayalneh.vercel.app',
  },
}
import { AboutSection } from '@/components/sections/about-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { EducationSection } from '@/components/sections/education-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
    </>
  )
}
