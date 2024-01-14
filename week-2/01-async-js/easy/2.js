// 2

var c = 6;

const ct = () => {
	if (c < 1) {
		return;
	}
	setTimeout(() => {
		c -= 1;
		console.log(c);
		ct();
	}, 1000);
};

ct();
