import type { Languages } from "@/types/languages"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { CustomCard } from "./custom-card"
import { CodeViewer } from "./code-viewer"

interface SnippetPlaygroundProps {
	title: string
	code: string
	children: React.ReactNode
	language?: Languages
}

export function SnippetPlayground({
	children,
	code,
	title,
	language = "typescript",
}: SnippetPlaygroundProps): React.JSX.Element {
	return (
		<Tabs defaultValue="preview" className="w-full">
			<TabsList className="mb-4">
				<TabsTrigger value="preview">Preview</TabsTrigger>
				<TabsTrigger value="code">Code</TabsTrigger>
			</TabsList>

			<TabsContent value="preview" className="p-0">
				<CustomCard
					title={title
						.split("-")
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ")}
				>
					{children}
				</CustomCard>
			</TabsContent>

			<TabsContent value="code" className="p-0">
				<CodeViewer code={code} title={title} language={language} />
			</TabsContent>
		</Tabs>
	)
}
