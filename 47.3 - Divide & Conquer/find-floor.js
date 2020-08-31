/**
 * Write a function called findFloor which accepts a sorted array and a value x,
 * and returns the floor of x in the array. The floor of x in an array
 * is the largest element in the array which is smaller than or equal to x.
 * If the floor does not exist, return -1.
 */

function findFloor(arr, n, low = 0, high = arr.length - 1) {
	// let start = 0;
	// let end = arr.length - 1;

	// while (end >= start) {
	// 	let mid = Math.floor((end + start) / 2);
	// 	if (arr[mid] === n || arr[mid] === n - 1) {
	// 		return arr[mid];
	// 	} else if (n > arr[mid]) {
	// 		start = mid;
	// 	} else end = mid;
	// }
	// return -1;

	if (low > high) return -1;
	if (n >= arr[high]) return arr[high];

	let mid = Math.floor((low + high) / 2);

	if (arr[mid] === n) return arr[mid];

	if (mid > 0 && arr[mid - 1] <= n && n < arr[mid]) {
		return arr[mid - 1];
	}

	if (n < arr[mid]) {
		return findFloor(arr, n, low, mid - 1);
	}

	return findFloor(arr, n, mid + 1, high);
}

/** Examples */
// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

module.exports = findFloor;
