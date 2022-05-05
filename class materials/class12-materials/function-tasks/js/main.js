// Making conditionals with question mark operator (?)

function checkAge(age) {
	return age >= 18 ? true : confirm('Did parents allow you?');
}

// Making conditionals with OR operator (||)

function checkAge(age) {
	return age > 18 || confirm('Did parents allow you?');
}

// Function that returns least of two numbers.
function checkMinNumb(num1, num2) {
	if (num1 > num2) {
		return num2;
	} else if (num2 > num1) {
		return num1;
	} else {
		console.log('NUMBERS ARE EQUAL!');
	}
}

// written with question mark operator.

function min(a, b) {
	return a < b ? a : b;
}

// Function doMath that prompts user to enter 2 numbers by clicking a button. Result will be inserted in a paragraph into the DOM.

document.querySelector('.do-math').addEventListener('click', doMath);

let resultText = document.querySelector('.result');

function doMath() {
	let x = prompt('Enter first number');
	let n = prompt('Enter second number');
	let result = Math.pow(x, n);

	resultText.classList.remove('hide');
	resultText.innerText = result;
}
