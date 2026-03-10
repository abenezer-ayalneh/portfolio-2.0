'use client'

import { motion } from 'framer-motion'
import { SectionWrapper, staggerContainer, fadeUpItem } from '@/components/shared/section-wrapper'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { skillCategories } from '@/data/skills'

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 lg:py-28 bg-muted/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="flex flex-col items-start gap-2 mb-12">
            <Badge variant="accent" className="text-xs uppercase tracking-widest">
              Skills
            </Badge>
            <h2
              id="skills-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Tech stack
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Technologies I work with across the full stack — from UI to infrastructure.
            </p>
          </div>
        </SectionWrapper>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.category} variants={fadeUpItem}>
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold text-muted-foreground uppercase tracking-wider">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
