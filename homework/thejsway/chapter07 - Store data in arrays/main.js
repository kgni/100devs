// * Musketeers

const musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
	console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach((musketeer) => {
	console.log(musketeer);
});

musketeers.splice(2, 1);

for (const musketeer of musketeers) {
	console.log(musketeer);
}

// * Sum of values

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
values.forEach((value) => {
	sum += value;
});

console.log(sum);

// * Array maximum

const values2 = [3, 11, 7, 2, 9, 10];

console.log(Math.max(...values2));

// More difficult route than above:
let max = values2[0];
values2.forEach((value) => {
	if (value >= max) {
		max = value;
	}
});

console.log(max);

// * List of words

function askForWordUntilStop() {
	let arr = [];
	let word = prompt('Add a word to the array');
	while (word !== 'stop') {
		console.log(`"${word}" added to the list.`);
		word = ' ' + word;
		arr.push(word);
		console.log(
			`This is your list: ${arr} you list now contains ${arr.length} items`
		);
		word = prompt('Add a word to the array');
	}
	console.log('You quit the app');
}
