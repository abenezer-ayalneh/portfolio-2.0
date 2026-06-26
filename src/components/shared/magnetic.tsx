'use client'

import { type PointerEvent, type ReactNode, useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MagneticProps {
	children: ReactNode
	/** How strongly the element follows the cursor (0–1). */
	strength?: number
	className?: string
}

/**
 * Wraps an interactive element so it subtly pulls toward the cursor on hover.
 * Disabled under prefers-reduced-motion. Part of the "rich/showcase" motion.
 */
export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
	const ref = useRef<HTMLDivElement>(null)
	const reduced = useReducedMotion()

	const x = useMotionValue(0)
	const y = useMotionValue(0)
	const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 })
	const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 })

	function handleMove(e: PointerEvent<HTMLDivElement>) {
		if (reduced) return
		const el = ref.current
		if (!el) return
		const rect = el.getBoundingClientRect()
		x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
		y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
	}

	function reset() {
		x.set(0)
		y.set(0)
	}

	return (
		<motion.div ref={ref} onPointerMove={handleMove} onPointerLeave={reset} style={{ x: springX, y: springY }} className={cn('inline-block', className)}>
			{children}
		</motion.div>
	)
}
