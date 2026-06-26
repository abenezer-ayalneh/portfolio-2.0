import { cn } from '@/lib/utils'

interface SectionHeadingProps {
	/** Two-digit order marker, e.g. "01". Optional. */
	index?: string
	/** Mono eyebrow label, e.g. "about". */
	eyebrow: string
	title: string
	/** id wired to the section's aria-labelledby. */
	titleId?: string
	description?: string
	className?: string
}

/**
 * Shared section header: a JetBrains-Mono eyebrow (the terminal motif) above a
 * Space Grotesk display title. Keeps every section's heading consistent.
 */
export function SectionHeading({ index, eyebrow, title, titleId, description, className }: SectionHeadingProps) {
	return (
		<div className={cn('flex flex-col items-start gap-3', className)}>
			<p className="font-mono text-sm text-primary">
				<span className="text-primary/50">{'//'}</span> {index ? `${index} — ` : ''}
				{eyebrow}
			</p>
			<h2 id={titleId} className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
				{title}
			</h2>
			{description && <p className="max-w-xl text-muted-foreground">{description}</p>}
		</div>
	)
}
