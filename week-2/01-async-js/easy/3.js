const { ifError } = require("assert");
const fs = require("fs");

console.log("fhjhaf");
fs.writeFile("a.txt", "This is 'a.txt'.", (err) => {
	if (err) console.log("Error");
	console.log("File 'a' Created,Saved.");
});

console.log("fhjhaf");

fs.readFile("a.txt", "utf-8", (err, data) => {
	// console.log(data);
	if (err) {
		console.log("Errorsdhbfds.");
	} else {
		fs.writeFile("b.txt", data.toString(), (err) => {
			if (err) console.log("Error");
			console.log("File 'b'  Created,Saved.");
		});
	}
});
console.log("fhjhaf");
