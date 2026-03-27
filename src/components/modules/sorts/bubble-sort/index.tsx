import { SnippetPlayground } from "@/components/snippet-playground"

import bubbleSortCode from "@/snippets/sorts/bubble-sort.ts?raw"

export default function BubbleSortPage(): React.JSX.Element {
	return (
		<SnippetPlayground
			title="bubble-sort"
			code={bubbleSortCode}
			language="typescript"
		>
			Test
		</SnippetPlayground>
	)
}
