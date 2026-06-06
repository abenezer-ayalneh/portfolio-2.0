import type { Metadata } from 'next'
import { Mail, Phone, Calendar } from 'lucide-react'
import { Linkedin } from '@/components/icons/brand-icons'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ContactForm } from '@/components/contact/contact-form'
import { SITE_CONFIG } from '@/data/social'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Abenezer Ayalneh — Full-Stack Developer. Available for new opportunities and collaborations.',
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abenezer.ayalneh.42@gmail.com',
    href: 'mailto:abenezer.ayalneh.42@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+251 916 667 538',
    href: 'tel:+251916667538',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'abenezer-ayalneh',
    href: 'https://www.linkedin.com/in/abenezer-ayalneh-b579911b5/',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        aria-labelledby="contact-heading"
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
                Contact
              </Badge>
              <h1
                id="contact-heading"
                className="text-4xl font-bold tracking-tight sm:text-5xl"
              >
                Let&apos;s work together
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mt-2">
                Whether you have an opportunity, a project in mind, or just want to say hello —
                my inbox is always open.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 lg:pb-28" aria-label="Contact form and details">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 items-start">
            {/* Contact form */}
            <SectionWrapper className="lg:col-span-3">
              <Card className="border-border/50">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-xl font-semibold mb-6">Send a message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </SectionWrapper>

            {/* Sidebar: contact details + booking */}
            <div className="lg:col-span-2 space-y-6">
              <SectionWrapper delay={0.1}>
                <Card className="border-border/50">
                  <CardContent className="p-6 space-y-5">
                    <h2 className="text-lg font-semibold">Contact details</h2>
                    {contactDetails.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{label}</p>
                          <a
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm font-medium hover:text-primary transition-colors break-all"
                          >
                            {value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </SectionWrapper>

              <SectionWrapper delay={0.2}>
                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">Book a call</h3>
                        <p className="text-xs text-muted-foreground">30 min intro — no obligation</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Prefer to talk? Pick a time on my calendar and let&apos;s have a conversation.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-primary/50 text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a
                        href={SITE_CONFIG.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Book a call — opens calendar booking"
                      >
                        <Calendar className="h-4 w-4" /> Schedule a Meeting
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </SectionWrapper>

              <SectionWrapper delay={0.3}>
                <div className="p-5 rounded-xl border border-border/50 bg-muted/30">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I typically respond within <span className="text-foreground font-medium">24 hours</span>.
                    I&apos;m currently{' '}
                    <span className="text-primary font-medium">open to new opportunities</span> —
                    full-time, contract, or freelance.
                  </p>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
