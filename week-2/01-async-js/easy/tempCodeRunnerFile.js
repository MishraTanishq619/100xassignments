
		fs.writeFile("b.txt", data.toString(), (err) => {
			if (err) console.log("Error");
			console.log("File 'b'  Created,Saved.");
		});
	