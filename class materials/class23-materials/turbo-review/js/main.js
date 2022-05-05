// *Variables*
// Declare a variable and assign it to a sentence as a string. Alert if the sentence is a question

const sentence = 'Hello!';

if (sentence[0] === '¿' || sentence[sentence.length - 1] === '?') {
	alert(sentence);
}

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

const stringOfWords =
	'Hi there! I am a jr. dev, looking to break into the industry';

console.log(stringOfWords.replaceAll('jr. dev', 'software engineer'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
	const rand = Math.floor(Math.random() * 3);
	if (rand === 0) {
		return 'rock';
	} else if (rand === 1) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(choice) {
	const botChoice = rockPaperScissors();
	choice = choice.toLowerCase();

	if (choice === botChoice) {
		return 'It is a draw!';
	} else if (choice === 'rock' && botChoice === 'scissors') {
		return 'You Win!';
	} else if (choice === 'paper' && botChoice === 'rock') {
		return 'You Win!';
	} else if (choice === 'scissors' && botChoice === 'paper') {
		return 'You Win!';
	} else {
		return 'Bot wins!';
	}
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playXTimes(arr) {
	for (let i = 0; i < arr.length; i++) {
		console.log(checkWin(arr[i]));
	}
}
