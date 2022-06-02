console.log('hello world');
const btn = document.querySelector('.rapper-btn');
const input = document.querySelector('.input');
btn.addEventListener('click', fetchRapper);

async function fetchRapper() {
	const rapperName = input.value;
	console.log(rapperName);
	const res = await fetch(
		`https://simple-rapper-api.herokuapp.com/api/${rapperName}`
	);
	const data = await res.json();

	console.log(data);

	document.querySelector('.birth-name').innerText = data.birthName;
	document.querySelector('.age').innerText = data.age;
	document.querySelector('.birth-place').innerText = data.birthLocation;
}
