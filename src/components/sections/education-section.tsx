import { SectionWrapper } from '@/components/shared/section-wrapper'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { education } from '@/data/education'
import { MapPin, Calendar, GraduationCap, ExternalLink } from 'lucide-react'

export function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-20 lg:py-28 bg-muted/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="flex flex-col items-start gap-2 mb-12">
            <Badge variant="accent" className="text-xs uppercase tracking-widest">
              Education
            </Badge>
            <h2
              id="education-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Academic background
            </h2>
          </div>
        </SectionWrapper>

        <div className="space-y-6">
          {education.map((entry, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <Card className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="hidden sm:flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{entry.degree}</h3>
                      </div>
                      <a
                        href={entry.institution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline font-medium text-sm"
                        aria-label={`${entry.institution.name} — opens in new tab`}
                      >
                        {entry.institution.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>

                      <div className="flex flex-wrap gap-4 mt-2 mb-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          {entry.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                          {entry.location}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground">{entry.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
