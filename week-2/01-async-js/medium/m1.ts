var s: string = "hello     world    my    name   is       raman";

console.log("Input is : " + s);

var i: number = 0;
var j: number = 0;

while (s[i]) {
	if (s[i] == " ") {
		j = i;
		while (s[j + 1] == " ") {
			j++;
		}
		s = s.slice(0, i) + s.slice(j);
		console.log(s);
	}
	i++;
}

console.log("Output is : " + s + ".");
