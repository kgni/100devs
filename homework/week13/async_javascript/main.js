async function getUsers() {
	const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
		(res) => res.json()
	);
	console.log(users);
	users.forEach(
		(user, i) =>
			(document.body.innerHTML += `<li>${i + 1}: ${user.name} - ${
				user.email
			}</li>`)
	);
}
