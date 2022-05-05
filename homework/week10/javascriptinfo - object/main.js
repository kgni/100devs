// OBJECTS

// Hello, object

const user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

// Check for emptiness

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}

// Sum object properties.

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function sumSalaries(salaries) {
	let sum = 0;
	for (let key in salaries) {
		sum += salaries[key];
	}
	return sum;
}

// Multiply numeric property values by 2

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

// function multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] === 'number') {
// 			obj[key] *= 2;
// 		}
// 	}
// }

// with isNan()
function multiplyNumeric(obj) {
	for (let key in obj) {
		if (!isNaN(obj[key])) {
			obj[key] *= 2;
		}
	}
}
