import { Fragment } from "react/jsx-runtime"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./ui/breadcrumb"

export function AppBreadcrumb(): React.JSX.Element {
	const pathnames = location.pathname.split("/").filter((x) => x)

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem className="hidden md:block">
					{pathnames.length === 0 ? (
						<BreadcrumbPage>Home</BreadcrumbPage>
					) : (
						<BreadcrumbLink asChild>
							<a href="/">Home</a>
						</BreadcrumbLink>
					)}
				</BreadcrumbItem>

				{pathnames.map((value, index) => {
					const to = `/${pathnames.slice(0, index + 1).join("/")}`
					const isLast = index === pathnames.length - 1

					return (
						<Fragment key={to}>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{value}</BreadcrumbPage>
								) : (
									<BreadcrumbLink asChild>
										<a href={to}>{value}</a>
									</BreadcrumbLink>
								)}
							</BreadcrumbItem>
						</Fragment>
					)
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
