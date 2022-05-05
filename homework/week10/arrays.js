// Translate border-left-width to borderLeftWidth

function camelize(str) {
	let newStr = str.split('-');
	for (let i = 1; i < newStr.length; i++) {
		newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
		// console.log(newStr);
	}

	newStr = newStr.join('');

	console.log(newStr);
}

camelize('hello-my-friend');

// Filter range

function filterRange(arr, a, b) {
	return arr.filter((item) => a <= item && item <= b);
}

let array = [5, 3, 8, 1];

let filtered = filterRange(array, 1, 4);

console.log(filtered);

// Filter range "in place"

function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		let val = arr[i];

		if (val > a || val < b) {
			arr.splice(i, 1);
		}
	}
}

filterRangeInPlace(array);

// Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

function sortDecreasing(a, b) {
	if (a > b) return -1;
	if (a == b) return 0;
	if (a < b) return 1;
}

arr.sort(sortDecreasing);

console.log(arr);

//

function copySorted(arr) {
	return arr.slice().sort();
}
