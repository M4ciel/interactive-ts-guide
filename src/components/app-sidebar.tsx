"use client"

import {
	SidebarContent,
	SidebarRail,
	useSidebar,
	Sidebar,
	SidebarHeader,
} from "./ui/sidebar"

import InteractiveLogo from "@/assets/logo_interactive.png"
import InteractiveLogoMini from "@/assets/logo_interactive_mini.png"
import { NavMain } from "./nav-main"
import { navMenu } from "@/constants/nav-menu"

export function AppSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>): React.JSX.Element {
	const { open } = useSidebar()

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className="h-16 items-center justify-center">
				{open ? (
					<img
						src={InteractiveLogo}
						alt="Logo Completa"
						width={193}
						height={42}
					/>
				) : (
					<img
						src={InteractiveLogoMini}
						alt="Logo Mini"
						width={46}
						height={42}
					/>
				)}
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={navMenu} />
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	)
}
