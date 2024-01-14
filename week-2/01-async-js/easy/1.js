// 1

var c = 6;

const brkItrv = () => {
	clearInterval(I);
};

var I = setInterval(() => {
	if (c < 0) {
		brkItrv();
	}
	c -= 1;
	console.log(c);
}, 1000);
