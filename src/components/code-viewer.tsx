import { useState } from "react"
import { Button } from "./ui/button"
import { Copy, Check } from "lucide-react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { CustomCard } from "./custom-card"
import type { Languages } from "@/types/languages"

interface CodeViewerProps {
	code: string
	title: string
	language?: Languages
}

export function CodeViewer({ code }: CodeViewerProps): React.JSX.Element {
	const [hasCopied, setHasCopied] = useState(false)

	const onCopy = () => {
		navigator.clipboard.writeText(code)
		setHasCopied(true)
		setTimeout(() => setHasCopied(false), 2000)
	}

	return (
		<CustomCard title="Bubble Sort">
			<Button
				variant="ghost"
				className="absolute top-4 right-4"
				onClick={onCopy}
			>
				{hasCopied ? (
					<Check className="h-4 w-4" />
				) : (
					<Copy className="h-4 w-4" />
				)}
			</Button>
			<SyntaxHighlighter
				language="typescript"
				style={vscDarkPlus}
				customStyle={{
					margin: 0,
					padding: "1.5rem",
					background: "transparent",
					fontSize: "0.875rem",
				}}
				showLineNumbers={true}
			>
				{code}
			</SyntaxHighlighter>
		</CustomCard>
	)
}
