//Write your pseduo code first!

// On click on the button, run the function below.
document.querySelector('.btn').addEventListener('click', convertCelsToFahr);

function convertCelsToFahr() {
	// Get value out of input
	let cels = document.querySelector('.temp').value;

	if (cels === '') {
		alert('Please enter a number');
	} else if (isNaN(cels)) {
		alert('Has to be a number');
	} else {
		// Convert the value to fahrenheit
		let fahr = cels * (9 / 5) + 32;

		// Show value in the dom
		document.querySelector('.result').innerText = fahr;
	}
}
