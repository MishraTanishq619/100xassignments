/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
// function isPalindrome(str) {
// 	str = str.toLowerCase();
// 	var i = 0;
// 	var j = str.length;

// 	while (j - i > 1) {
// 		while (str[j] == ("?" | " " | "!" | "," | ".")) {
// 			j--;
// 		}
// 		while (str[j] == ("?" | " " | "!" | "," | ".")) {
// 			i++;
// 		}

// 		if (str[i] == str[j]) {
// 			i++;
// 			j--;
// 			continue;
// 		}
// 		return false;
// 	}
// 	return true;
// }
// t1 = "Able, was I ere I saw Elba!";

function isPalindrome(str) {
	r = ["?", " ", "!", ",", "."];
	r.forEach((i) => {
		str = str.replaceAll(i, "");
	});
	str = str.toLowerCase();
	// console.log(str);

	var i = 0;
	var j = str.length - 1;

	while (j - i > 1) {
		// console.log(i, j, str[i] == str[j], str[i], str[j]);
		if (str[i] == str[j]) {
			i++;
			j--;
		} else {
			return false;
		}
	}
	return true;
}
// console.log(isPalindrome(t1));
module.exports = isPalindrome;
