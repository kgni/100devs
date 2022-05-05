// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favFood = 'Pizza';
favFood = 'Burger';
alert(favFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
const str = 'HELLO';

alert(str[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function ThreeNumDivide(n1, n2, n3) {
	alert((n1 / n2) * n3);
}

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRootLog(num) {
	console.log(Math.cbrt(num));
}
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function isItSummer(month) {
	month.toLowerCase();
	switch (month) {
		case 'january':
			console.log('BOOOO');
			break;
		case 'february':
			console.log('BOOOO');
			break;
		case 'march':
			console.log('BOOOO');
			break;
		case 'april':
			console.log('BOOOO');
			break;
		case 'may':
			console.log('BOOOO');
			break;
		case 'june':
			console.log('YAY');
			break;
		case 'july':
			console.log('YAY');
			break;
		case 'august':
			console.log('YAY');
			break;
		case 'september':
			console.log('YAY');
			break;
		case 'october':
			console.log('BOOOO');
			break;
		case 'september':
			console.log('BOOOO');
			break;
		case 'december':
			console.log('BOOOO');
			break;
		default:
			console.log('Please enter a real month, maybe you had a typo');
			break;
	}
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loopFromOneToArgumentWithoutFive(num) {
	for (let i = 1; i <= num; i++) {
		if (i % 5 !== 0) {
			console.log(i);
		}
	}
}
