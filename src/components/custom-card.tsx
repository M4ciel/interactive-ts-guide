import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface CustomCardProps {
	title: string
	children: React.ReactNode
}

export function CustomCard({
	title,
	children,
}: CustomCardProps): React.JSX.Element {
	return (
		<Card className="overflow-hidden rounded-lg border border-border py-0 text-sm">
			<CardHeader className="flex items-center justify-between border-b border-border bg-zinc-800 px-4 py-4">
				<CardTitle className="font-mono text-xs text-muted-foreground">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className="relative pb-4">{children}</CardContent>
		</Card>
	)
}
