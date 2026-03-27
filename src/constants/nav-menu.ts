import type { Nav } from "@/types/nav"
import { Shuffle } from "lucide-react"

export const navMenu: Nav[] = [
	{
		title: "Sorts",
		url: "#",
		icon: Shuffle,
		isActive: true,
		items: [
			{
				title: "Bubble Sort",
				url: "#",
			},
			{
				title: "Quick Sort",
				url: "#",
			},
		],
	},
]
