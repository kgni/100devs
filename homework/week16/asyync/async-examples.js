const fetchPromise = fetch(
	'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);

console.log(fetchPromise);

fetchPromise.then((response) => {
	console.log(`Received response: ${response.status}`);
});

console.log('Started request...');

fetchPromise
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		return response.json();
	})
	.then((json) => {
		console.log(json[0].name);
	});

// Catching errors

const fetchPromise2 = fetch(
	'bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);

fetchPromise2
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		return response.json();
	})
	.then((json) => {
		console.log(json[0].name);
	})
	.catch((error) => {
		console.error(`Could not get products: ${error}`);
	});

// promise.all() which resolves

const fetchPromise3 = fetch(
	'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);
const fetchPromise4 = fetch(
	'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found'
);
const fetchPromise5 = fetch(
	'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
);

Promise.all([fetchPromise3, fetchPromise4, fetchPromise5])
	.then((responses) => {
		for (const response of responses) {
			console.log(`${response.url}: ${response.status}`);
		}
	})
	.catch((error) => {
		console.error(`Failed to fetch: ${error}`);
	});

// promise.all() with bad urls (reject)

const fetchPromise7 = fetch(
	'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);
const fetchPromise8 = fetch(
	'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found'
);
const fetchPromise9 = fetch(
	'bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
);

Promise.all([fetchPromise7, fetchPromise8, fetchPromise9])
	.then((responses) => {
		for (const response of responses) {
			console.log(`${response.url}: ${response.status}`);
		}
	})
	.catch((error) => {
		console.error(`Failed to fetch: ${error}`);
	});

// promise.any()
const fetchPromise10 = fetch(
	'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
);
const fetchPromise11 = fetch(
	'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found'
);
const fetchPromise12 = fetch(
	'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
);

Promise.any([fetchPromise10, fetchPromise11, fetchPromise12])
	.then((response) => {
		console.log(`${response.url}: ${response.status}`);
	})
	.catch((error) => {
		console.error(`Failed to fetch: ${error}`);
	});

// AYNC AWAIT:

async function myFunction() {
	// This is an async function
}

async function fetchProducts() {
	try {
		const response = await fetch(
			'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
		);
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}

		const json = await response.json();
		console.log(json[0].name);
	} catch (error) {
		console.error(`Could not get products: ${error}`);
	}
}

fetchProducts();
