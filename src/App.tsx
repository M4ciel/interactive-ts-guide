import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout"
import BubbleSortPage from "./components/modules/sorts/bubble-sort"

export function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						path="/"
						element={
							<div className="flex h-full items-center justify-center text-muted-foreground">
								Select an algorithm on the sidebar to begin.
							</div>
						}
					/>
					<Route path="/sorts/bubble-sort" element={<BubbleSortPage />} />
					{/* Fallback */}
					<Route path="*" element={<Navigate to="/" replace />} />"
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App
