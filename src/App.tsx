import { Layout } from "./components/layout"
import BubbleSortPage from "./components/modules/sorts/bubble-sort"

export function App() {
	return (
		<Layout>
			<div className="space-y-6">
				<div>
					<h2>Bubble Sort</h2>
					<p>An algorithm to order a simple array of numbers.</p>
				</div>

				<BubbleSortPage />
			</div>
		</Layout>
	)
}

export default App
