import { AppBreadcrumb } from "./app-breadcrumb"
import { AppSidebar } from "./app-sidebar"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar"
import { TooltipProvider } from "./ui/tooltip"

interface LayoutProps {
	children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	return (
		<TooltipProvider>
			<SidebarProvider>
				<div className="flex h-screen w-full bg-background text-foreground">
					<AppSidebar />
					<SidebarInset>
						<header className="transition-[width, height] flex h-16 shrink-0 items-center gap-2 ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
							<div className="item flex gap-2 px-4">
								<SidebarTrigger className="-ml-1" />
								<Separator
									orientation="vertical"
									className="mr-2 data-[orientation=vertical]:h-4"
								/>
								<AppBreadcrumb />
							</div>
						</header>
						<main className="flex flex-1 flex-col overflow-hidden">
							<ScrollArea className="flex-1 p-6">
								<div className="mx-auto max-w-5xl">{children}</div>
							</ScrollArea>
						</main>
					</SidebarInset>
				</div>
			</SidebarProvider>
		</TooltipProvider>
	)
}
