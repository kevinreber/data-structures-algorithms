function countZeroes(arr) {
	let firstZero = findFirst(arr);
	if (firstZero === -1) return 0;

	return arr.length - firstZero;
}

function findFirst(arr) {
	let start = 0;
	let end = arr.length - 1;

	while (end >= start) {
		let mid = Math.floor((start + end) / 2);
		if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
			return mid;
		} else if (arr[mid] === 1) {
			start = mid + 1;
		} else end = mid - 1;
	}
	return -1;
}

module.exports = countZeroes;
