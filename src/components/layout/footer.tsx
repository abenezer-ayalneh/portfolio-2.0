import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons/brand-icons'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link href="/" className="font-mono text-base">
              <span className="text-primary">~/</span>abenezer
            </Link>
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-primary/60">$</span> full-stack developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abenezer-ayalneh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/abenezer-ayalneh-b579911b5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:abenezer.ayalneh.42@gmail.com"
              aria-label="Send email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-center font-mono text-xs text-muted-foreground">
          <span className="text-primary/60">{'//'}</span> © {currentYear} Abenezer Ayalneh · built
          with next.js · tailwind · framer-motion
        </p>
      </div>
    </footer>
  )
}
