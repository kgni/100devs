//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

document.querySelector('h2').innerText = localStorage.getItem('books');

function getFetch() {
	const ISBN = document.querySelector('input').value;
	const url = `https://openlibrary.org/isbn/${ISBN}.json`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			// Put title into local storage:

			// checks the very first time we put a book into local storage, if there are no books, it will return null, and therefore we will set the books key to just one single book the first time.
			if (!localStorage.getItem('books')) {
				localStorage.setItem('books', data.title);
			}

			// This will run if we already have items in our local storage.
			else {
				let books = localStorage.getItem('books') + ' ; ' + data.title;
				localStorage.setItem('books', books);
			}

			document.querySelector('h2').innerText = localStorage.getItem('books');

			document.querySelector(
				'.publish-date'
			).innerText = `Publish Date: ${data.publish_date}`;
			document.querySelector(
				'.number-of-pages'
			).innerText = `Pages: ${data.number_of_pages}`;
		});
}
