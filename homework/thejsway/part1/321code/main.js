console.log('Baptiste');
console.log(40);
console.log(6 + 3 - (3 * 3) / 3);

console.log(4 + 5);
console.log('4 + 5');
console.log('4' + '5');

// variables

// Improved Hello

// let firstName = prompt('What is your first name?');
// while (!firstName) {
// 	firstName = prompt('What is your first name?');
// }
// let lastName = prompt('What is your last name?');
// while (!lastName) {
// 	lastName = prompt('What is your last name?');
// }

// alert(`Hello ${firstName} ${lastName}!`);

// a = 2

// b = 10

// c = 102
// d = 30
// e = 40
// f = 10
// g = 10 / 4

// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b;
// const d = a * b + b;
// const e = a * (b + b);
// const f = (a * b) / a;
// const g = (b / a) * a;
// console.log(a, b, c, d, e, f, g);

// VAT calculation

// const rawPrice = prompt(
// 	'Enter your price that you want to be calculated to your final price with VAT'
// );

// alert(`${rawPrice * 1.206}`);

// // Celcius to fahrenheit

// const celcius = prompt('Enter you value in celcius');

// alert(`${(celcius * 9) / 5 + 32}`);

// Variable swapping

// let number1 = 5;
// let number2 = 3;

// number1 = number2;
// number2 = 3;

// console.log(number1);
// console.log(number2);

// Conditions

function showNextDay() {
	let day = prompt('Enter a day and we will show you the following day');
	day = day.toLowerCase();

	switch (day) {
		case 'monday':
			alert('The next day is Tuesday');
			break;
		case 'tuesday':
			alert('The next day is Wednesday');
			break;
		case 'wednesday':
			alert('The next day is Thursday');
			break;
		case 'thursday':
			alert('The next day is Friday');
			break;
		case 'friday':
			alert('The next day is Saturday');
			break;
		case 'saturday':
			alert('The next day is Sunday');
			break;
		case 'sunday':
			alert('The next day is Monday');
			break;

		default:
			alert('Not a real day, try again.');
	}
}

// Number comparison

function compareNumb(n1, n2) {
	if (n1 > n2) {
		console.log(`${n1} is greater than ${n2}`);
	} else if (n1 < n2) {
		console.log(`${n1} is less than ${n2}`);
	} else {
		console.log(`${n1} is equal to ${n2}`);
	}
}

// Numbers of days in a month

function daysInAMonth() {
	let month = prompt('Enter a number for a month');
	while (month > 12 || month < 1 || isNaN(month)) {
		month = prompt('Has to be a number between 1 and 12');
	}

	switch (month) {
		case '1':
			console.log('There are 31 days in January');
			break;
		case '2':
			console.log('There are 28 days in February');
			break;
		case '3':
			console.log('There are 31 days in March');
			break;
		case '4':
			console.log('There are 30 days in April');
			break;
		case '5':
			console.log('There are 31 days in May');
			break;
		case '6':
			console.log('There are 30 days in June');
			break;
		case '7':
			console.log('There are 31 days in July');
			break;
		case '8':
			console.log('There are 31 days in August');
			break;
		case '9':
			console.log('There are 30 days in September');
			break;
		case '10':
			console.log('There are 31 days in October');
			break;
		case '11':
			console.log('There are 30 days in November');
			break;
		case '12':
			console.log('There are 31 days in December');
			break;
	}
}

function followingSecond() {
	let hours = prompt('Enter number of hours');

	while (isNaN(hours)) {
		hours = prompt('Enter number of hours');
	}

	let minutes = prompt('Enter number of minutes');
	while (isNaN(minutes)) {
		minutes = prompt('Enter number of minutes');
	}

	let seconds = prompt('Enter number of seconds');
	while (isNaN(seconds)) {
		seconds = prompt('Enter number of seconds');
	}

	console.log(
		`This is the time 1 second after you input:\n${hours}hh:${minutes}mm:${
			Number(seconds) + 1
		}ss`
	);
}

// Loops coding
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

// Functions

function sayHello(firstName, lastName) {
	while (!firstName) {
		firstName = prompt('What is your first name?');
	}
	while (!lastName) {
		lastName = prompt('What is your last name?');
	}

	console.log(`Hello ${firstName} ${lastName}`);
}

function square1(x) {
	return x * x;
}

const square2 = (x) => x * x;

function show10FirstSquares() {
	for (let i = 1; i <= 10; i++) {
		console.log(i * i);
	}
}

function min(n1, n2) {
	if (n1 < n2) {
		console.log(n1);
	} else {
		console.log(n2);
	}
}

function calculate(n1, operator, n2) {
	switch (operator) {
		case '+':
			console.log(n1 + n2);
			break;
		case '*':
			console.log(n1 * n2);
			break;
		case '/':
			console.log(n1 / n2);
			break;
		case '-':
			console.log(n1 - n2);
			break;
	}
}

// Circumference and area of a circle

function calcCircumferenceAndAreaCircle(radius) {
	let circumference = 2 * Math.PI * radius;
	let area = Math.PI * radius * radius;
	console.log(`The circumference is ${circumference}`);
	console.log(`The area is ${area}`);
}
