'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import { workHistory } from '@/data/work'
import { projects } from '@/data/projects'

const stats = [
	{ value: 5, suffix: '+', label: 'years experience' },
	{ value: workHistory.length, suffix: '', label: 'companies' },
	{ value: projects.length, suffix: '', label: 'projects shipped' },
	{ value: 100, suffix: '%', label: 'remote-ready' },
]

function Counter({ to, suffix }: { to: number; suffix: string }) {
	const ref = useRef<HTMLSpanElement>(null)
	const inView = useInView(ref, { once: true, margin: '-60px' })
	const reduced = useReducedMotion()
	const [value, setValue] = useState(0)

	useEffect(() => {
		if (!inView) return
		const controls = animate(0, to, {
			duration: reduced ? 0 : 1.2,
			ease: 'easeOut',
			onUpdate: (v) => setValue(Math.round(v)),
		})
		return () => controls.stop()
	}, [inView, to, reduced])

	return (
		<span ref={ref}>
			{value}
			{suffix}
		</span>
	)
}

export function StatsStrip() {
	return (
		<section aria-label="At a glance" className="border-y border-border/60 bg-muted/20">
			<div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 sm:px-6 md:grid-cols-4 lg:px-8">
				{stats.map((stat) => (
					<div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-8 text-center">
						<span className="font-display text-3xl font-bold text-primary text-glow sm:text-4xl">
							<Counter to={stat.value} suffix={stat.suffix} />
						</span>
						<span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</span>
					</div>
				))}
			</div>
		</section>
	)
}
