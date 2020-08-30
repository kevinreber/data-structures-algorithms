/**
 * Write a function called findRotatedIndex which accepts
 * a rotated array of sorted numbers and an integer.
 * The function should return the index of num in the array.
 * If the value is not found, return -1.
 */

function findRotatedIndex(arr, num) {
	let pivot = findPivot(arr, num);

	if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
		return binarySearch(arr, num, 0, pivot - 1);
	} else {
		return binarySearch(arr, num, pivot, arr.length - 1);
	}
}

function findPivot(arr) {
	if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
	var start = 0;
	var end = arr.length - 1;
	while (start <= end) {
		var mid = Math.floor((start + end) / 2);
		if (arr[mid] > arr[mid + 1]) return mid + 1;
		else if (arr[start] <= arr[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}
}

function binarySearch(arr, num, start, end) {
	if (arr.length === 0) return -1;
	if (num < arr[start] || num > arr[end]) return -1;

	while (end >= start) {
		let mid = Math.floor((end + start) / 2);
		if (num === arr[mid]) {
			return mid;
		} else if (num > arr[mid]) {
			start = mid + 1;
		} else end = mid - 1;
	}

	return -1;
}

/** Examples */
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

module.exports = findRotatedIndex;
