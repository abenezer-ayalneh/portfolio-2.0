import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const eslintConfig = [
	...nextCoreWebVitals,
	...nextTypescript,
	{
		// Vendored shadcn/ui primitives are generated via the shadcn CLI, not
		// hand-authored. The upstream carousel syncs embla state via a synchronous
		// setState on mount, which the react-hooks effect rule flags; leave the
		// generated files pristine rather than patching them.
		files: ['src/components/ui/**/*.{ts,tsx}'],
		rules: {
			'react-hooks/set-state-in-effect': 'off',
		},
	},
]

export default eslintConfig
