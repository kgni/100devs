//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const nums = [10, 20, 30, 40, 50, 60];

console.log(nums.reduce((sum, element) => sum + element, 0));

//Create a function that takes in an array of numbers
function squareArray(arr) {
	//Return a new array of numbers that is every original number squared
	return arr.map((el) => el * el);
}

//Create a function that takes string
function reverseString(str) {
	//Print the reverse of that string to the console
	console.log(str.split('').reverse().join(''));
}

//Create a function that takes in a string
function isPalindrome(str) {
	//Alert if the string is a palindrome or not
	if (str === str.split('').reverse().join('')) {
		alert('sting is a palindrome!');
	} else {
		alert('string is NOT a palindrome!');
	}
}
