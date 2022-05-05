//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ['South Park', 'The Simpsons', 'Kitchen Nightmares'];

tvShows.forEach((tvShow) => console.log(tvShow));

//Create and array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//Return a new array of numbers that includes every even number from the previous Arrays

const evenNumbers = numbers.filter((num) => num % 2 === 0);

const evens = (numbers) => numbers.filter((number) => number % 2 === 0);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function arrayOfNum(arr) {
	let sorted = arr.sort((a, b) => a - b);
	// let secondHigest =
	console.log(sorted);
	const secondHigest = sorted[1];
	const secondLowest = sorted[sorted.length - 2];

	const sum = secondHigest + secondLowest;

	alert(sum);
}
