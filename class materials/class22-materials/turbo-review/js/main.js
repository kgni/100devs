// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'Fanta';
console.log(favDrink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str = 'Hello, my, name, is apple';

console.log(str.includes('apple'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
	let rand = Math.floor(Math.random() * 3 + 1);

	if (rand === 1) {
		return 'rock';
	} else if (rand === 2) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice) {
	let computerChoice = rockPaperScissors();

	if (
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'paper' && computerChoice === 'rock') ||
		(playerChoice === 'scissors' && computerChoice === 'paper')
	) {
		console.log('YOU WON!');
	} else if (playerChoice === computerChoice) {
		console.log('DRAW!');
	} else {
		console.log('COMPUTER WON!');
	}
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr) {
	arr.forEach((choice) => checkWin(choice));
}

playGameXTimes(['rock', 'paper', 'scissors']);
