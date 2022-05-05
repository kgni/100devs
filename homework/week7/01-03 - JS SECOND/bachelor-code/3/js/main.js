// const contestants = document.querySelectorAll('.contestant');

// Array.from(contestants).forEach((element) =>
// element.addEventListener('click', checkForRose)
// );

// function checkForRose(click) {
// if (click.target.classList.contains('rose')) {
// document.querySelector('#nikki').classList.toggle('hidden');
// } else {
// alert('Wrong!');
// }
// }

// select contestants
// add eventlistener to all of them, but creating an array, then looping through them.
// The elements that has the class of rose, should display a picture, where as if they don't the user should be alerted.

// const contestants = document.querySelectorAll('.contestant');

// Array.from(contestants).forEach((contestant) =>
// 	contestant.addEventListener('click', checkForRose)
// );

// function checkForRose(click) {
// 	if (click.target.classList.contains('rose')) {
// 		document.querySelector('#nikki').classList.toggle('hidden');
// 	} else {
// 		alert('wrong');
// 	}
// }

const contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach((contestant) =>
	contestant.addEventListener('click', checkForRose)
);

function checkForRose(click) {
	if (click.target.classList.contains('rose')) {
		document.querySelector('#nikki').classList.toggle('hidden');
	} else {
		alert('wrong');
	}
}

let myString = 'hello World';

myString[0].toUpperCase();

console.log(myString);
