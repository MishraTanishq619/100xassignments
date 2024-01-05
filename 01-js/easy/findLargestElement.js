/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
	var r = numbers[0];
	for (const i of numbers) {
		if (r < i) {
			r = i;
		}
	}
	return r;
}

module.exports = findLargestElement;
