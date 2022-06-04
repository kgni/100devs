const express = require('express');
const app = express();
const PORT = 8000;

// data file containing our notes
const notes = require('./notes');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.get('/api/notes', (req, res) => {
	res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
	const id = req.params.id;
	console.log(typeof id);
	const note = notes.find((note) => note.id == id);
	if (note.length === 0) {
		throw 'That note does not exist';
	} else {
		console.log(note);
		res.json(note);
	}
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
