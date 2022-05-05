document.getElementById('purple').onclick = partyPurple;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;
document.querySelector('#yellow').onclick = partyYellow;
document.querySelector('#reset').onclick = reset;

function partyPurple() {
	document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)';
	document.querySelector('h1').style.color = 'white';
	document.querySelector('h2').style.color = 'white';
}

function partyGreen() {
	document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)';
	document.querySelector('h1').style.color = 'white';
	document.querySelector('h2').style.color = 'white';
}

function partyBlue() {
	document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)';
	document.querySelector('h1').style.color = 'black';
	document.querySelector('h2').style.color = 'black';
}

function partyYellow() {
	document.querySelector('body').style.backgroundColor = 'yellow';
	document.querySelector('h1').style.color = 'black';
	document.querySelector('h2').style.color = 'black';
}

function reset() {
	document.querySelector('body').style.backgroundColor = 'white';
	document.querySelector('h1').style.color = 'black';
	document.querySelector('h2').style.color = 'black';
}
