document.querySelector('.btn').addEventListener('click', check);
let answer = document.querySelector('.answer');
let answerText = document.querySelector('.answer-text');
let answerImg = document.querySelector('.answer-img');

function check() {
	let day = document.querySelector('.input').value.toLowerCase();

	if (day === '') {
		alert('Please enter a day');
	} else if (day === 'monday' || day === 'wednesday') {
		answerText.innerText = 'BOOOOORING';
		answerImg.src = 'https://giphy.com/embed/VhttbBSBeWYIXOD7PM';
	} else if (day === 'tuesday' || day === 'thursday') {
		answerText.innerText = 'CLASS TODAY, TURN UUUP!';
		answerImg.src = 'https://giphy.com/embed/flwTQ8SO5tvZm';
	} else if (day === 'friday' || day === 'saturday' || day === 'sunday') {
		answerText.innerText = 'WEEKEND, TIME TO GET TO WORK!';
		answerImg.src = 'https://giphy.com/embed/xUPGcKoAYCn5fHK0Zq';
	} else {
		alert('Enter a day of the week');
	}

	document.querySelector('.input').value = '';
}

// function resetSrc() {
// 	setInterval(() => {
// 		answer.innerText = '';
// 		answerImg.src = '';
// 	}, 5000);
// }
