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
document.querySelector('.reset').addEventListener('click', reset);
let card = document.querySelector('.card');

let resultText = document.querySelector('.result');
let inputOne = document.querySelector('.input1');
let inputTwo = document.querySelector('.input2');
let errorText = document.querySelector('.error');

function createErrorText(errorText) {
	errorElement.classList.remove('hide');
	errorElement.innerText = errorText;
	resultText.classList.add('hide');
	// setInterval(() => {
	// 	errorElement.classList.add('hide');
	// }, 5000);
}

function doMath() {
	let result = Math.pow(inputOne.value, inputTwo.value);

	if (inputOne.value === '' && inputTwo.value === '') {
		createErrorText('Please fill in both inputs');
	} else if (inputOne.value === '') {
		createErrorText('Please fill in the first input');
	} else if (inputTwo.value === '') {
		createErrorText('Please fill in the second input');
	} else {
		errorElement.classList.add('hide');
		resultText.classList.remove('hide');
		resultText.innerText = result;

		inputOne.value = null;
		inputTwo.value = null;
	}
}

let errorElement = document.querySelector('.error');

function reset() {
	resultText.classList.add('hide');
	errorElement.classList.add('hide');
}
