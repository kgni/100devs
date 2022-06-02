const express = require('express');
const app = express();
const PORT = 8000;

const data = require('./data');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
	res.json(data);
});

app.get('/api/:country', (req, res) => {
	const country = req.params.country.toLowerCase();
	if (data[country]) {
		res.json(data[country]);
	} else {
		throw 'Could not fetch, try again...';
	}
});

app.listen(PORT, () => {
	console.log(`RUNNING ON PORT ${PORT}`);
});