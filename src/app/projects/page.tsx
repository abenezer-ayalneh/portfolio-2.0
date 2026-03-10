'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionWrapper, staggerContainer, fadeUpItem } from '@/components/shared/section-wrapper'
import { ProjectCard } from '@/components/projects/project-card'
import { projects } from '@/data/projects'
import { Github } from 'lucide-react'
import type { Metadata } from 'next'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        aria-labelledby="projects-heading"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 0%, hsl(var(--primary) / 0.1), transparent)',
          }}
        />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="flex flex-col items-start gap-2 mb-4">
              <Badge variant="accent" className="text-xs uppercase tracking-widest">
                Work
              </Badge>
              <h1
                id="projects-heading"
                className="text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mt-2">
                A selection of projects I&apos;ve built — from real-time multiplayer games to
                full-scale betting platforms. Each one is a problem I found worth solving.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-20 lg:pb-28" aria-label="All projects">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={fadeUpItem}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <SectionWrapper delay={0.2} className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-border/50 bg-card/30">
              <p className="text-muted-foreground">
                Want to see more? Check out my GitHub for all public repositories.
              </p>
              <Button
                variant="outline"
                className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://github.com/abenezer-ayalneh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile — opens in new tab"
                >
                  <Github className="h-4 w-4" /> View GitHub Profile
                </a>
              </Button>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  )
}
