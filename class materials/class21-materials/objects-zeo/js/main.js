//Create a stopwatch object that has four properties and three methods

const stopwatch = {};

stopwatch.shape = 'round';
stopwatch.color = 'black';
stopwatch.brand = 'Nike';
stopwatch.currentTime = 12;

stopwatch.beep = function () {
	console.log('BEEP BEEP');
};
stopwatch.addOne = function () {
	stopwatch.currentTime++;
	console.log(stopwatch.currentTime);
};
stopwatch.subOne = function () {
	stopwatch.currentTime--;
	console.log(stopwatch.currentTime);
};

console.log(stopwatch);

stopwatch.beep();

const watch = {
	shape: 'square',
	color: 'yellow',
	size: 'small',
	changeColor(x) {
		this.color = x;
	},
	changeSize(x) {
		this.size = x;
	},
	changeShape(x) {
		return (this.shape = x);
	},
};
