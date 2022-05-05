//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
	const choice = document.querySelector('input').value;
	const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			document.querySelector('h2').innerText = data.name;
			document.querySelector('.range').innerText = `Range: ${data.range}`;
			document.querySelector('.spell-desc').innerText = data.desc;
			document.querySelector('h3').innerText = data.classes[0].name;
			const ul = document.querySelector('ul');
			removeAllChildNodes(ul);
			data.subclasses.forEach((subclass) => {
				const li = document.createElement('li');
				li.textContent = subclass.name;
				ul.appendChild(li);
			});
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}
