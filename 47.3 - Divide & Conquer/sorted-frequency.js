/**
 * Given a sorted array and a number, write a function called sortedFrequency
 * that counts the occurrences of the number in the array.
 */

function sortedFrequency() {
	// find start
	let start = findFirst(arr, num);
	console.log(start);
	if (start === -1) return start;
	// find end
	let end = findLast(arr, num);

	// return index
	return end - start + 1;
}

function findFirst(arr, num) {
	// returns index of num in arr
	let start = 0;
	let end = arr.length - 1;

	while (end >= start) {
		console.log(start, end);
		// get mid index value
		let mid = Math.floor((end + start) / 2);
		// if midIdx is num or num is greater than arr[midIdx -1]
		if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
			return mid;
		} else if (arr[mid] > num) {
			end = mid - 1;
		} else start = mid + 1;
	}
	return -1;
}

function findLast(arr, num) {
	let start = 0;
	let end = arr.length - 1;

	while (end >= start) {
		let mid = Math.floor((start + end) / 2);
		// if mid reaches end of arr or arr[mid + 1] is greater than num and arr[mid] === num
		if ((mid === arr.length - 1 || arr[mid + 1] > num) && arr[mid] === num) {
			return mid;
		} else if (arr[mid] > num) {
			start = mid - 1;
		} else end = mid + 1;
	}
	return -1;
}

/** Examples */
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

module.exports = sortedFrequency;
