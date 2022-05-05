//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function onlyEvens(arr) {
	let newArray = [];
	arr.forEach((el) => {
		if (el % 2 === 0) {
			newArray.push(el);
		}
	});

	return newArray;
}

// With map (CHECK IF THIS IS CORRECT)

function newArrayMap(arr) {
	let newArray = arr.map((el) => {
		if (el % 2 !== 0) {
		} else {
			return el;
		}
	});
	console.log(newArray);
}
