/**
 * Sorts an array using bubble sort method.
 *
 * @param {Array} arr  O(n^2)
 */
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let swapped = false;
		// arr.length - 1 skips the last number in the array
		for (let j = 0; j < arr.length - 1; j++) {
			// if arr[i] > arr[j+1] then swap numbers
			if (arr[i] > arr[j + 1]) {
				// temp store highest number in comparison
				let temp = arr[i];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}
		if (!swapped) break;
	}
	return arr;
}

module.exports = bubbleSort;
