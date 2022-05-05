// *Variables*
// Create a variable and console log the value

let hello = 'hello';
console.log(hello);

// Create a variable, add 10 to it, and alert the value

let addTen = 0;
addTen += 10;
alert(addTen);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtractFourNumbers(a, b, c, d) {
	let difference = a - b - c - d;
	alert(difference);
}

// Create a function that divides one number by another and returns the remainder
function calcRemainder(a, b) {
	return a % b;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumbersJumanji(a, b) {
	let sum = a + b;
	if (sum > 50) {
		alert('Jumanji');
	}
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThreeNumbersZebra(a, b, c) {
	let product = a * b * c;

	if (product % 3 === 0) {
		alert('ZEBRA');
	}
}
