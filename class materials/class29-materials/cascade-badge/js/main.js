//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

const pokemonParty = ['Yes', 'Hello', 'Diller'];

function reversePokemonParty(pokemonparty) {
	let reverseArr = [];

	pokemonparty.forEach((el) => reverseArr.unshift(el));

	return reverseArr;
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

const squares = [1, 2, 3, 4, 5];
const cubes = [1, 2, 3, 4, 4];

function squaresCubes(squares, cubes) {
	let squaresSum = squares.reduce((acc, c) => acc + c ** 2, 0);
	let cubesSum = cubes.reduce((acc, c) => acc + c ** 3, 0);

	console.log(`Squares sums to: ${squaresSum}`);
	console.log(`Cubes sums to: ${cubesSum}`);
	return squaresSum > cubesSum;
}

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multipleOfOwnIndex(arr) {
	return arr.filter((el, index) => {
		if (el % index === 0) {
			return el;
		}
	});
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function returnAsNumber(arr) {
	return arr.reduce((acc, c) => acc + Number(c), 0);
}
