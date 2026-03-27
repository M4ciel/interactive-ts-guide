/**
 * Order a number's array using the Bubble Sort algorithm
 * Time Complexity: 0(n²) in the worst case
 * Space Complexity: 0(n) by create a copy of the array
 */

export function bubbleSort(array: number[]): number[] {
    const result = [...array];
    const n = result.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                ;[result[j], result[j + 1]] = [result[j + 1], result[j]]
            }
        }
    }

    return result
}