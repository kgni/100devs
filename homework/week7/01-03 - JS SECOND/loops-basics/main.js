// Carousel

function carouselTenFor() {
	let turns = prompt('Enter the number of turns');
	for (let i = 1; i <= turns; i++) {
		console.log(`${i} turn(s)`);
	}
}

function carouselTenWhile() {
	let turn = 1;
	let turns = prompt('Enter the number of turns');
	while (turn <= turns) {
		console.log(`${turn} turn(s)`);
		turn++;
	}
}

// Parity

function evenAndOddFor() {
	initNum = parseInt(prompt('Enter initial number'));
	// We are using parseInt on the value prompted by the user, because the value returned when entering a value in a prompt, is always a string or null. parseInt parses a string to an integer
	for (let i = initNum; i < initNum + 10; i++) {
		if (i % 2 === 0) {
			console.log(`${i} is even`);
		} else {
			console.log(`${i} is odd`);
		}
	}
}

function evenAndOddWhile() {
	let num = parseInt(prompt('Enter initial number'));
	let numPlusTen = num + 10;
	while (num < numPlusTen) {
		if (num % 2 === 0) {
			console.log(`${num} is even`);
			num++;
		} else {
			console.log(`${num} is odd`);
			num++;
		}
	}
}

// Input validaton

function lessOrEqual100While() {
	let input = parseInt(prompt('Enter a number'));

	while (input >= 100 || input < 50) {
		input = parseInt(prompt('Enter a number'));
	}

	console.log(input);
}

// Multiplication table

function multiplicationTable() {
	let input = prompt('Enter a number');
	while (input < 2 || input > 9) {
		input = prompt('Enter a number');
	}
	for (let i = 1; i <= 10; i++) {
		console.log(input * i);
	}
}

// Neither yes nor no

function neitherYesNorNo() {
	let input = prompt('How are you doing?');
	while (input !== 'yes' && input !== 'no') {
		input = prompt('How are you doing?');
	}
	alert('you win!');
}

// FizzBuzz

function FizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}
