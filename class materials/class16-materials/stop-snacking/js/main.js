//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', stopSnacking);

function stopSnacking() {
	let input = Number(document.querySelector('input').value);

	document.querySelector('#stops').innerHTML = '';
	for (let i = 1; i <= input; i++) {
		document.querySelector('#stops').innerHTML += '<br>Stop Snacking';
	}
}
