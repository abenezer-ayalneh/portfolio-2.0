'use client'

import Link from 'next/link'
import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { toast } from 'sonner'

const socialActions = [
  {
    icon: Github,
    label: 'GitHub',
    ariaLabel: 'GitHub profile',
    action: () => window.open('https://github.com/abenezer-ayalneh', '_blank'),
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    ariaLabel: 'LinkedIn profile',
    action: () =>
      window.open('https://www.linkedin.com/in/abenezer-ayalneh-b579911b5/', '_blank'),
  },
  {
    icon: Mail,
    label: 'Email',
    ariaLabel: 'Copy email address',
    action: () => {
      navigator.clipboard.writeText('abenezer.ayalneh.42@gmail.com')
      toast.success('Email copied to clipboard!')
    },
  },
  {
    icon: Phone,
    label: 'Phone',
    ariaLabel: 'Copy phone number',
    action: () => {
      navigator.clipboard.writeText('+251916667538')
      toast.success('Phone number copied to clipboard!')
    },
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -20%, hsl(var(--primary) / 0.15), transparent)',
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="mb-4 text-sm font-medium tracking-widest text-primary uppercase"
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
          >
            Hey, I&apos;m{' '}
            <span className="text-primary">Abenezer</span>{' '}
            <span className="text-foreground">Ayalneh</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            I build scalable, production-ready web applications with{' '}
            <span className="text-foreground font-medium">TypeScript</span>,{' '}
            <span className="text-foreground font-medium">Angular</span>,{' '}
            <span className="text-foreground font-medium">React</span>, and{' '}
            <span className="text-foreground font-medium">Nest.js</span>. 5+ years of
            full-stack experience across gaming and enterprise.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href="/resume.pdf" download="Abenezer Ayalneh -- Resume.pdf">
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="gap-2" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-3">
            <TooltipProvider>
              {socialActions.map(({ icon: Icon, label, ariaLabel, action }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={action}
                      aria-label={ariaLabel}
                      className="rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
