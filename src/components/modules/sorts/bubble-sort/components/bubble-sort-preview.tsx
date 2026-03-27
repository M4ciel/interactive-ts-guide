import { Button } from "@/components/ui/button"
import { useBubbleSortHook } from "../hooks/use-bubble-sort"
import { Play, RefreshCcw } from "lucide-react"

export function BubbleSortPreview(): React.JSX.Element {
	const { array, activeIndex, handleReset, handleSort, isSorting } =
		useBubbleSortHook()

	return (
		<div className="flex w-full flex-col items-center justify-center gap-12 py-8">
			<div className="flex h-48 items-end gap-2">
				{array.map((value, index) => {
					const isActive = activeIndex.includes(index)

					return (
						<div
							key={index}
							style={{ height: `${value * 3}px` }}
							className={`relative flex w-12 items-end justify-center rounded-t-md transition-all duration-300 ease-in-out ${isActive ? "bg-emerald-500" : "bg-muted-foreground"}`}
						>
							<span className="mb-2 font-mono text-sm font-bold text-white">
								{value}
							</span>
						</div>
					)
				})}
			</div>
			<div className="flex gap-4">
				<Button onClick={handleSort} disabled={isSorting} className="w-32">
					{isSorting ? (
						"Sorting..."
					) : (
						<>
							<Play className="mr-2 h-4 w-4" />
							Sort
						</>
					)}
				</Button>
				<Button variant="outline" onClick={handleReset} disabled={isSorting}>
					<RefreshCcw className="mr-2 h-4 w-4" /> Shuffle
				</Button>
			</div>
		</div>
	)
}
