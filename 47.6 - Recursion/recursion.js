/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
	if (nums.length === idx) return 1;

	return nums[idx] * product(nums, idx + 1);
}

/** Example Test */
// product([2, 3, 4])   // 24

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWord = 0) {
	// return longestWord when loop through array finishes
	if (words.length === idx) return longestWord;

	// get longest
	longestWord = Math.max(words[idx].length, longestWord);
	return longest(words, idx + 1, longestWord);
}

/** Example Test */
// longest(["hello", "hi", "hola"])  // 5

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, letters = '') {
	if (str.length <= idx) return letters;

	// append every other letter
	letters += str[idx];
	return everyOther(str, idx + 2, letters);
}

/** Example Test */
// everyOther("hello")  // "hlo"

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
	let leftIdx = idx;
	let rightIdx = str.length - idx - 1;

	// if all letters match return true
	if (leftIdx >= rightIdx) return true;
	// if one letter doesn't match, return false
	if (str[leftIdx] !== str[rightIdx]) return false;
	return isPalindrome(str, idx + 1);
}

/** Example Test */
// isPalindrome("tacocat")  // true
// isPalindrome("tacodog")  // false

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
	if (arr.length === idx) return -1;
	if (arr[idx] === val) return idx;
	return findIndex(arr, val, idx + 1);
}

/** Example Test */
// let animals = ["duck", "cat", "pony"];

// findIndex(animals, "cat");  // 1
// findIndex(animals, "porcupine");   // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, reverse = '') {
	if (str.length === idx) return reverse;
	reverse += str[str.length - 1 - idx];
	return revString(str, idx + 1, reverse);
}

/** Example Test */
// revString("porcupine") // 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let stringArr = [];
	for (let key in obj) {
		// only get string values
		if (typeof obj[key] === 'string') stringArr.push(obj[key]);
		// if key is a nested object, use recursion
		if (typeof obj[key] === 'object')
			stringArr.push(...gatherStrings(obj[key]));
	}
	return stringArr;
}

/** Example Test */
// let nestedObj = {
//   firstName: "Lester",
//   favoriteNumber: 22,
//   moreData: {
//     lastName: "Testowitz"
//   },
//   funFacts: {
//     moreStuff: {
//       anotherNumber: 100,
//       deeplyNestedString: {
//         almostThere: {
//           success: "you made it!"
//         }
//       }
//     },
//     favoriteString: "nice!"
//   }
// };

// gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
	if (left > right) {
		return -1;
	}

	let mid = Math.floor((right + left) / 2);

	if (arr[mid] === val) return mid;

	// binary search
	if (arr[mid] > val) {
		return binarySearch(arr, val, left, mid - 1);
	}
	return binarySearch(arr, val, mid + 1, right);
}

/** Example Test */
// binarySearch([1,2,3,4],1) // 0
// binarySearch([1,2,3,4],3) // 2
// binarySearch([1,2,3,4],5) // -1

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
