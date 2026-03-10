'use client'

import { motion } from 'framer-motion'
import { SectionWrapper, staggerContainer, fadeUpItem } from '@/components/shared/section-wrapper'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { workHistory } from '@/data/work'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="flex flex-col items-start gap-2 mb-12">
            <Badge variant="accent" className="text-xs uppercase tracking-widest">
              Experience
            </Badge>
            <h2
              id="experience-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Work history
            </h2>
          </div>
        </SectionWrapper>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative space-y-6"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-8 bottom-0 w-0.5 bg-border hidden md:block" />

          {workHistory.map((job, index) => (
            <motion.article key={index} variants={fadeUpItem} className="relative">
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="mt-1.5 h-10 w-10 rounded-full border-2 border-primary bg-background flex items-center justify-center shrink-0 z-10">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                <Card className="flex-1 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                        <a
                          href={job.company.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-primary hover:underline font-medium text-sm mt-0.5"
                          aria-label={`${job.company.name} — opens in new tab`}
                        >
                          {job.company.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                      <Badge variant="outline" className="self-start shrink-0 text-xs">
                        {job.jobType}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {job.location}
                      </span>
                    </div>

                    {job.description.map((para, i) => (
                      <p key={i} className="text-sm text-muted-foreground mb-2">
                        {para}
                      </p>
                    ))}

                    {job.bulletPoints.length > 0 && (
                      <ul className="mt-3 space-y-2" aria-label="Key responsibilities">
                        {job.bulletPoints.map((point, i) => (
                          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1 shrink-0">●</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
