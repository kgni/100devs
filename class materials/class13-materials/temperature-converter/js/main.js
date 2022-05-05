//Write your pseduo code first!

// THIS IS TOO BIG BRAINING IT! NOT ENOUGH PLAIN ENGLISH.
// Make calculator for calculating celcius to fahrenheit, and printing it in the DOM.DOM
// First we select our elements, both input and button and store them in a variable. On the button we listen for clicks to later fire a function that will run on the value that has been put into our input.
// We also select our empty element, that we will use to print our result to the DOM and store it in a variable
// When we have our input selected, we take the value of that input, store it and run it in our function that is going to be fired on a click event on the button.

// In the function, we are taking the input value and multiplying it by 33.8 (1:33.8, is the ratio from celsius to fahrenheit). and reassigning it to the variable which holds the input.
// Then we set the variable for the empy elemets innerText, equal to the variable that now holds the calculated fahrenheit.

// The way leon would do it:
// 0 - 32
// need the value that is in celcius.
// convert from celcius to fahrenheit
// print the fahrenheit to the DOM

let printResult = document.querySelector('.print-result');

document
	.querySelector('.convert')
	.addEventListener('click', convertCelsiusToFahrenheit);

function convertCelsiusToFahrenheit() {
	let celcius = document.querySelector('.celsius').value;
	if (isNaN(celcius)) {
		alert('enter a number');
	} else if (celcius === '') {
		celcius = 0;
		let fahrenheit = celcius * (9 / 5) + 32;

		printResult.innerText = `${celcius} °C is equal to ${fahrenheit} °F`;
	} else {
		let fahrenheit = celcius * (9 / 5) + 32;

		printResult.innerText = `${celcius} °C is equal to ${fahrenheit} °F`;
	}

	document.querySelector('.celsius').value = '';
}
