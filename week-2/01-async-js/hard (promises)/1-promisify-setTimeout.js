/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
<<<<<<< HEAD
}

module.exports = wait;
=======
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(undefined);
		}, n * 1000);
	});
}

module.exports = wait;

// console.log(wait(2));
// wait(5);
// console.log("dadw");

// 2.

// function delay(seconds) {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve(`Promise resolved after ${seconds} seconds`);
// 		}, seconds * 1000);
// 	});
// }

// Example usage:
// const n = 3; // You can replace this with the desired number of seconds
// wait(2)
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});
>>>>>>> 6590e11 (23/2/24)
