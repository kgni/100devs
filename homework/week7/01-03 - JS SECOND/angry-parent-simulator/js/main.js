document.querySelector('#yell').addEventListener('click', yell);

function yell() {
	let fName = document.querySelector('#firstName').value;
	let fMiddle = document.querySelector('#firstMiddle').value;
	let lMiddle = document.querySelector('#lastMiddle').value;
	let lName = document.querySelector('#lastName').value;

	document.querySelector(
		'#placeToYell'
	).innerText = `${fName} ${fMiddle} ${lMiddle} ${lName}`;
}
