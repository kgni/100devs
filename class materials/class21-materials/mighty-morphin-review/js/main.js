// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let holiday = 'Christmas';
holiday = 'Summer Vacation'.toUpperCase();

console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let str = 'Hello';
console.log(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveNums(n1, n2, n3, n4, n5) {
	let fiveNumsSum = n1 + n2 + n3 + n4 + n5;
	alert(Math.abs(100 - fiveNumsSum));
}

// fiveNums(10, 20, 30, 40, 50);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function threeNums(n1, n2, n3) {
	console.log(Math.max(n1, n2, n3));
	console.log(Math.min(n1, n2, n3));
}
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const headsOrTails = () => (Math.random() < 0.5 ? 'heads' : 'tails');

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function loopHeadsOrTails(x) {
	for (let i = 1; i <= x; i++) {
		console.log(`${i} - ${headsOrTails()}`);
	}
}
