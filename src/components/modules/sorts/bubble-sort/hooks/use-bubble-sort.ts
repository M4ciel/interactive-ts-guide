import { useState } from "react"

const INITIAL_ARRAY = [25, 42, 12, 8, 36, 19, 50, 30]
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export function useBubbleSortHook() {
	const [array, setArray] = useState([...INITIAL_ARRAY])
	const [isSorting, setIsSorting] = useState(false)
	const [activeIndex, setActiveIndex] = useState<number[]>([])

	const handleSort = async () => {
		if (isSorting) return
		setIsSorting(true)

		const result = [...array]
		const n = result.length

		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
				setActiveIndex([j, j + 1])
				await sleep(300)

				if (result[j] > result[j + 1]) {
					;[result[j], result[j + 1]] = [result[j + 1], result[j]]
					setArray([...result])
					await sleep(300)
				}
			}
		}
		setActiveIndex([])
		setIsSorting(false)
	}

	const handleReset = () => {
		if (isSorting) return

		const shuffled = [...INITIAL_ARRAY].sort(() => Math.random() - 0.5)
		setArray(shuffled)
		setActiveIndex([])
	}

	return { array, activeIndex, isSorting, handleSort, handleReset }
}
