import { SnippetPlayground } from "@/components/snippet-playground"

import bubbleSortCode from "@/snippets/sorts/bubble-sort.ts?raw"
import { BubbleSortPreview } from "./components/bubble-sort-preview"

export default function BubbleSortPage(): React.JSX.Element {
	return (
		<SnippetPlayground
			title="bubble-sort"
			code={bubbleSortCode}
			language="typescript"
		>
			<BubbleSortPreview />
		</SnippetPlayground>
	)
}
