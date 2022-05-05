//--- Easy
//create a variable and assign it a number

let num = 1;

//minus 10 from that number

num -= 10;

//print that number to the console

console.log(num);

//--- Medium
//create a variable that holds a value from the input

let input = document.querySelector('#danceDanceRevolution').value;
input = parseInt(input) + 25;
alert(input);

//add 25 to that number

//alert that number

//--- Hard
//create a variable that holds the h1

const h1 = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables

h1.addEventListener('click', sumNums);

function sumNums() {
	let sum = input + num;
	console.log(sum);
}
