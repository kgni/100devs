//Create a button that adds 1 to a botScore stored in localStorage
document.querySelector('button').addEventListener('click', addOne);

if (!localStorage.getItem('score')) {
	localStorage.setItem('score', 0);
} else {
	document.querySelector('p').innerText = localStorage.getItem('score');
}
function addOne() {
	let score = localStorage.getItem('score');
	score++;
	localStorage.setItem('score', score);
	document.querySelector('p').innerText = score;
}
