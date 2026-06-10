import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { StatsStrip } from '@/components/sections/stats-strip'
import { FeaturedProjectsSection } from '@/components/sections/featured-projects-section'
import { AboutSection } from '@/components/sections/about-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { AiSection } from '@/components/sections/ai-section'
import { CtaBand } from '@/components/sections/cta-band'

export const metadata: Metadata = {
  title: 'Abenezer Ayalneh — Full-Stack Developer',
  description:
    'Full-Stack Developer with 5+ years of experience building scalable web applications using TypeScript, Angular, React, and Nest.js.',
  alternates: {
    canonical: 'https://abenezer-ayalneh.dev',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <FeaturedProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <AiSection />
      <CtaBand />
    </>
  )
}
