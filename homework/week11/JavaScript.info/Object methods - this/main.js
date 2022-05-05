// Create a calculator

// let calculator = {
// 	a: 0,
// 	b: 0,
// 	read() {
// 		return (this.a = Number(prompt('Enter first value')))(
// 			(this.b = Number(prompt('Enter second value')))
// 		);
// 	},
// 	sum() {
// 		return this.a + this.b;
// 	},
// 	mul() {
// 		return this.a * this.b;
// 	},
// };

// Chaining

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep() {
		alert(this.step);
		return this;
	},
};

// Create new calculator

function Calculator() {
	this.read = function () {
		this.a = +prompt('a?', 0);
		this.b = +prompt('b?', 0);
	};

	this.sum = function () {
		return this.a + this.b;
	};

	this.mul = function () {
		return this.a * this.b;
	};
}

let calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());

// Create new accumulator

function Accumulator(startingValue) {
	this.value = startingValue;
  this.read() = function() {
    this.value += prompt('Enter a number to add to the total', 0)
  }
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);