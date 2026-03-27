import type { LucideIcon } from "lucide-react"

export type Nav = {
	title: string
	url: string
	icon?: LucideIcon
	isActive?: boolean
	items?: SubNav[]
}

type SubNav = {
	title: string
	url: string
}
