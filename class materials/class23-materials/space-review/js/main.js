//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const nums = [1, 2, 3, 40, 50, 70, 60];

let sumNums = nums.reduce((acc, c) => acc + c, 0);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareArray(arr) {
	return arr.map((el) => Math.pow(el, 2));
}

//Create a function that takes string
//Print the reverse of that string to the console

function reverseString(str) {
	return str.split('').reverse().join('');
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrome(str) {
	if (str === str.split('').reverse().join('')) {
		return 'String is a palindrome!';
	} else {
		return 'String is not a palindrome!';
	}
}
