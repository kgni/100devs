// const circle = {
// 	radius: 1,
// 	location: {
// 		x: 1,
// 		y: 1,
// 	},
// 	draw: function () {
// 		console.log('draw');
// 	},
// };

// // Factory function
// function createCircle(radius) {
// 	return {
// 		radius,
// 		draw: function () {
// 			console.log('draw');
// 		},
// 	};
// }

// const circle1 = createCircle(1);

// // Constructor function

// function Circle(radius) {
// 	this.radius = radius;
// 	this.draw = function () {
// 		console.log('draw');
// 	};
// }

// const anotherCircle = new Circle(1);

// Stopwatch exercise

// create stopwatch that has a property to display the duration of how long it has been running for. The stopwatch should take in 3 methods, one for starting, one for stopping and one for resetting the duration. The duration may only be displayed and not set manually.
// When running the start method, duration should begin to increment in seconds and milliseconds. It should only stop when the stop function is called.
// If the start function is already running, throw an error if it is called again - same counts for stop function.
// Reset function should automatically stop the time and set it to 0.

function Stopwatch() {
	let startTime,
		endTime,
		running,
		duration = 0;

	Object.defineProperty(this, 'duration', {
		get: function () {
			return duration;
		},
		set: function () {
			throw new Error('Not allowed to set duration manually');
		},
	});

	this.start = function () {
		if (running) {
			throw new Error('Stopwatch is already running');
		} else {
			console.log('Stopwatch started');
		}

		running = true;

		startTime = new Date();
	};

	this.stop = function () {
		if (!running) {
			throw new Error('Stopwatch is not started');
		} else {
			console.log('Stopwatch stopped');
		}
		running = false;
		endTime = new Date();
		const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
		duration += seconds;
	};

	this.reset = function () {
		console.log('Stopwatch reset');

		startTime = null;
		endTime = null;
		running = false;
		duration = 0;
	};
}

const sw = new Stopwatch();
