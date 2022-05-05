//Create an array of movie titles. Loop through the array and each element to the h2.

const movies = ['Shrek 1', 'Pirates of the Carribean', 'Spongebob Squarepants'];

// movies.forEach((movie) => {
// 	h2.innerHTML += `${movie} `;
// });

for (let i = 0; i < movies.length; i++) {
	document.querySelector('h2').innerHTML += `${movies[i]} `;
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

const nums = [10, 20, 30];

let total = 0;
nums.forEach((num) => {
	num += 3;
	total += num;
	console.log(num);
});

console.log(total / nums.length);

// for (let i = 0; i < nums.length; i++) {
// 	nums[i] += 3;
// 	console.log(nums[i]);
// }

//Find the average of all the numbers from question three

input.forEach((el) => {
	if (el > 0) {
		positive++;
	} else {
		negative -= el;
	}
});

newArray.push(positive);
newArray.push(negative);
