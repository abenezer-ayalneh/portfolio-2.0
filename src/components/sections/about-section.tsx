import { SectionWrapper } from '@/components/shared/section-wrapper'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { MapPin, Calendar, Code2 } from 'lucide-react'

const highlights = [
  { icon: Calendar, label: '5+ Years Experience' },
  { icon: MapPin, label: 'Addis Ababa, Ethiopia' },
  { icon: Code2, label: 'Open to Remote' },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="flex flex-col items-start gap-2 mb-12">
            <Badge variant="accent" className="text-xs uppercase tracking-widest">
              About
            </Badge>
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              A bit about me
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <SectionWrapper delay={0.1}>
            <div className="relative">
              {/* Avatar placeholder with initials */}
              <div className="mx-auto w-64 h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-primary/20 via-surface to-muted flex items-center justify-center border border-border/50 shadow-2xl">
                <span className="text-7xl font-bold text-primary/70 select-none">AA</span>
              </div>
              {/* Decorative ring */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 lg:w-80 lg:h-80 rounded-2xl border border-primary/20 -z-10" />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-base">
                I&apos;m a passionate Full-Stack Developer with over 4 years of professional
                experience building everything from enterprise web applications to real-time
                multiplayer games.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                My journey started at{' '}
                <span className="text-foreground font-medium">Addis Ababa University</span> where I
                studied Computer Science, and I&apos;ve been building things for the web ever since.
                I love working across the full stack — architecting backends with{' '}
                <span className="text-foreground font-medium">Nest.js</span>, crafting responsive
                frontends with <span className="text-foreground font-medium">Angular</span> and{' '}
                <span className="text-foreground font-medium">React</span>, and wiring them together
                with clean, maintainable <span className="text-foreground font-medium">TypeScript</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                When I&apos;m not writing code, you&apos;ll find me exploring new technologies,
                contributing to side projects like{' '}
                <a
                  href="https://gametrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Lynx
                </a>
                , or thinking about the next thing to build.
              </p>

              <Separator />

              <div className="flex flex-wrap gap-4">
                {highlights.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
