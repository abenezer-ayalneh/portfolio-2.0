'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { SectionHeading } from '@/components/shared/section-heading'
import { MonoTag } from '@/components/shared/mono-tag'
import { aiCapabilities } from '@/data/ai'

type ScriptLine =
  | { kind: 'cmd'; text: string }
  | { kind: 'thinking'; doneText: string }
  | { kind: 'tool'; call: string; note: string }
  | { kind: 'answer'; text: string }
  | { kind: 'done'; text: string }

const SCRIPT: ScriptLine[] = [
  { kind: 'cmd', text: 'agent --ask "What can you build with AI?"' },
  { kind: 'thinking', doneText: 'planned approach' },
  { kind: 'tool', call: 'retrieveContext()', note: 'RAG over your data' },
  { kind: 'tool', call: 'callModel({ provider: "anthropic" })', note: 'streaming' },
  {
    kind: 'answer',
    text:
      'I ship production LLM features — retrieval-augmented generation over your own data, ' +
      'tool-calling agents, and token-streamed chat — integrated into web apps with typed, ' +
      'structured outputs. And I build with AI in the loop, every day.',
  },
  { kind: 'done', text: '1.2s · 3 tool calls · structured output' },
]

const ANSWER_INDEX = SCRIPT.findIndex((l) => l.kind === 'answer')
const ANSWER_TEXT = (SCRIPT[ANSWER_INDEX] as Extract<ScriptLine, { kind: 'answer' }>).text

const BRAILLE = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']

function Spinner() {
  const reduced = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => setI((n) => (n + 1) % BRAILLE.length), 80)
    return () => clearInterval(id)
  }, [reduced])

  return <span className="text-primary">{BRAILLE[i]}</span>
}

function Cursor() {
  return (
    <span className="cursor-blink ml-0.5 inline-block w-[0.55ch] bg-primary text-transparent">
      _
    </span>
  )
}

function AgentTerminal() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduced = useReducedMotion()

  const [step, setStep] = useState(0)
  const [answerLen, setAnswerLen] = useState(0)

  const effectiveStep = reduced ? SCRIPT.length : step
  const effectiveAnswerLen = reduced ? ANSWER_TEXT.length : answerLen

  useEffect(() => {
    if (!inView || reduced) return
    if (step >= SCRIPT.length) return

    const line = SCRIPT[step]

    if (line.kind === 'answer') {
      if (answerLen < line.text.length) {
        const t = setTimeout(() => setAnswerLen((n) => n + 1), 16)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setStep((s) => s + 1), 500)
      return () => clearTimeout(t)
    }

    const delay =
      line.kind === 'cmd' ? 700 : line.kind === 'thinking' ? 950 : line.kind === 'tool' ? 520 : 400
    const t = setTimeout(() => setStep((s) => s + 1), delay)
    return () => clearTimeout(t)
  }, [inView, reduced, step, answerLen])

  const visible = SCRIPT.slice(0, Math.min(effectiveStep + 1, SCRIPT.length))

  return (
    <div ref={ref} className="terminal-panel crt-flicker overflow-hidden rounded-xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">ai-agent.ts</span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-wider text-primary">
            online
          </span>
        </span>
      </div>

      {/* Conversation */}
      <div className="crt-scanlines relative min-h-[340px] space-y-2.5 p-5 font-mono text-sm leading-relaxed">
        {visible.map((line, i) => {
          const isCurrent = i === effectiveStep

          if (line.kind === 'cmd') {
            return (
              <div key={i} className="text-foreground">
                <span className="text-primary">$</span>{' '}
                <span className="text-glow">{line.text}</span>
                {isCurrent && <Cursor />}
              </div>
            )
          }

          if (line.kind === 'thinking') {
            return (
              <div key={i} className="flex items-center gap-2 text-muted-foreground">
                {isCurrent ? (
                  <>
                    <Spinner /> planning…
                  </>
                ) : (
                  <>
                    <span className="text-primary">✓</span> {line.doneText}
                  </>
                )}
              </div>
            )
          }

          if (line.kind === 'tool') {
            return (
              <div key={i} className="text-muted-foreground">
                <span className="text-primary/70">↳</span>{' '}
                <span className="text-foreground">{line.call}</span>
                <span className="text-muted-foreground/70"> {'// '}{line.note}</span>
              </div>
            )
          }

          if (line.kind === 'answer') {
            const shown = isCurrent ? line.text.slice(0, effectiveAnswerLen) : line.text
            return (
              <p key={i} className="pt-1 text-foreground/90">
                {shown}
                {isCurrent && <Cursor />}
              </p>
            )
          }

          return (
            <div key={i} className="pt-1 text-primary">
              <span className="text-primary/60">●</span> {line.text}
            </div>
          )
        })}

        {effectiveStep >= SCRIPT.length && (
          <div className="text-foreground">
            <span className="text-primary">$</span>
            <Cursor />
          </div>
        )}
      </div>
    </div>
  )
}

export function AiSection() {
  return (
    <section id="ai" aria-labelledby="ai-heading" className="relative overflow-hidden py-20 lg:py-28">
      {/* amber glow backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 30%, hsl(var(--primary) / 0.1), transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <SectionHeading
            index="05"
            eyebrow="ai"
            title="Building with AI"
            titleId="ai-heading"
            description="I design and ship LLM-powered features — from retrieval and agents to streaming, structured outputs, and AI-in-the-loop engineering."
            className="mb-12"
          />
        </SectionWrapper>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <SectionWrapper>
            <AgentTerminal />
          </SectionWrapper>

          <SectionWrapper delay={0.1}>
            <div className="space-y-8">
              {aiCapabilities.map((cap) => (
                <div key={cap.title}>
                  <h3 className="flex items-center gap-2 font-mono text-sm text-primary">
                    <span className="text-primary/50">{'>'}</span>
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <MonoTag key={tag}>{tag}</MonoTag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  )
}
