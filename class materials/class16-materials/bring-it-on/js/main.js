// *Variables*
// Create a variable and console log the value

let randomVariable = 10;
console.log(randomVariable);

// Create a variable, add 10 to it, and alert the value

let addTenToit = 5;
addTenToit += 10;
alert(addTenToit);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourNumsAlert(n1, n2, n3, n4) {
	alert(n1 - n2 - n3 - n4);
}
// Create a function that divides one number by another and returns the remainder

function returnMod(n1, n2) {
	return n1 % n2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwoNumGreater50Jumanji(n1, n2) {
	let sum = n1 + n2;
	if (sum > 50) {
		alert('Jumanji');
	}
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function mulThreeNumZebra(n1, n2, n3) {
	let result = n1 * n2 * n3;
	if (result % 3 === 0) {
		alert('ZEBRA');
	}
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordTimes(word, num) {
	for (let i = 0; i < num; i++) {
		console.log(word);
	}
}
