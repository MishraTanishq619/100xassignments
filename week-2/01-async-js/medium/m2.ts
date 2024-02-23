var date: Date = new Date();

var time: string = ":" + date.getMinutes() + ":" + date.getSeconds();

// console.log(time);

var h: number = date.getHours();
var fr: string = "";

if (h > 11) {
	h -= 12;
	fr = "PM";
} else {
	fr = "AM";
}

time = h + time + " " + fr;

console.log(time);
