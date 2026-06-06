import { ExternalLink } from 'lucide-react'
import { Github } from '@/components/icons/brand-icons'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { type ProjectEntry } from '@/data/projects'

interface ProjectCardProps {
  project: ProjectEntry
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full border-border/50 bg-card/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group overflow-hidden">
      {/* Project preview placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-surface via-muted to-background border-b border-border/50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary/20 select-none group-hover:text-primary/30 transition-colors">
              {project.title.charAt(0)}
            </div>
            <p className="text-xs text-muted-foreground/60">{project.liveUrl?.replace('https://', '') ?? 'Preview'}</p>
          </div>
        </div>
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="accent" className="text-xs">
              Featured
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">{project.shortDescription}</p>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Problem
          </p>
          <p className="text-sm text-muted-foreground">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Solution
          </p>
          <p className="text-sm text-muted-foreground">{project.solution}</p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-4">
        {project.liveUrl && (
          <Button
            size="sm"
            className="gap-1.5 bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
            asChild
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — live demo`}
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button
            size="sm"
            variant="outline"
            className="gap-1.5 border-primary/50 text-primary hover:bg-primary/10 flex-1"
            asChild
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — GitHub repository`}
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
