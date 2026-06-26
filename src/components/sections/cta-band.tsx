import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import { Magnetic } from '@/components/shared/magnetic'

export function CtaBand() {
	return (
		<section aria-labelledby="cta-heading" className="relative overflow-hidden py-24 lg:py-32">
			{/* amber glow backdrop */}
			<div
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: 'radial-gradient(ellipse 60% 70% at 50% 120%, hsl(var(--primary) / 0.18), transparent 70%)',
				}}
			/>
			<div
				className="pointer-events-none absolute inset-0 -z-10 bg-grid"
				style={{
					maskImage: 'radial-gradient(ellipse 60% 80% at 50% 100%, black, transparent)',
					WebkitMaskImage: 'radial-gradient(ellipse 60% 80% at 50% 100%, black, transparent)',
				}}
			/>

			<div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
				<SectionWrapper>
					<p className="mb-4 font-mono text-sm text-primary">
						<span className="text-primary/50">{'//'}</span> get in touch
					</p>
					<h2 id="cta-heading" className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
						Let&apos;s build something.
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
						Have an opportunity, a project in mind, or just want to say hello? My inbox is always open.
					</p>
					<div className="mt-9 flex justify-center">
						<Magnetic>
							<Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
								<Link href="/contact">
									Start a conversation <ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</Magnetic>
					</div>
				</SectionWrapper>
			</div>
		</section>
	)
}
