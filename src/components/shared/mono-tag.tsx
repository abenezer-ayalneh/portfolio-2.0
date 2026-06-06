import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MonoTagProps {
  children: ReactNode
  className?: string
}

/**
 * Monospace pill tag — the canonical way to render a tech/skill token in the
 * redesign (see "Terminal motif" in CONTEXT.md). Used by skills + project rows.
 */
export function MonoTag({ children, className }: MonoTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border bg-muted/40 px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary',
        className,
      )}
    >
      {children}
    </span>
  )
}
