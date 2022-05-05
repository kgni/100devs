//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwoNumsAndAlert(n1, n2) {
	alert(n1 - n2);
}

//create a function that divides three numbers and console logs the quotient
function divideThreeNumsAndLogs(n1, n2, n3) {
	console.log(n1 / n2 / n3);
}
//create a function that multiplys three numbers and returns the product
function multiplyThreeNumsAndReturn(a, b, c) {
	return a * b * c;
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function twoNumRemainderThird(num1, num2, remainder) {
	return (num1 + num2) % remainder;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hard(num1, num2, num3, num4) {
	let multipliedNums = num1 * num2;
	if (multipliedNums > 100) {
		console.log((multipliedNums += num3 + num4));
	} else if (multipliedNums < 100) {
		console.log((multipliedNums -= num3 + num4));
	} else if (multipliedNums == 100) {
		console.log((multipliedNums * num3) % num4);
	}
}
