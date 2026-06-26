export interface AiCapability {
	title: string
	description: string
	tags: string[]
}

/**
 * AI capabilities shown in the dedicated "Building with AI" section.
 * Edit freely — trim any tool/provider that isn't accurate for you. These are
 * the only AI claims on the site, so keep them honest.
 */
export const aiCapabilities: AiCapability[] = [
	{
		title: 'LLM app development',
		description: 'Retrieval-augmented generation over your own data, tool-calling agents, and token-streamed chat — shipped as real product features.',
		tags: ['RAG', 'Agents', 'Tool-calling', 'Prompt engineering', 'Streaming', 'Structured output'],
	},
	{
		title: 'AI API integration',
		description: 'Model providers wired into web and back-end apps, with embeddings and vector search for semantic retrieval.',
		tags: ['OpenAI', 'Anthropic', 'Gemini', 'Embeddings', 'Vector search'],
	},
	{
		title: 'AI-assisted engineering',
		description: 'Shipping faster with AI in the loop — modern AI dev tooling and automated, agent-driven workflows.',
		tags: ['Claude Code', 'Cursor', 'Copilot', 'AI workflows'],
	},
]
