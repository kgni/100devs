const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

let notes = [
	{
		id: 1,
		content: 'HTML is easy',
		date: '2022-05-30T17:30:31.098Z',
		important: true,
	},
	{
		id: 2,
		content: 'Browser can execute only Javascript',
		date: '2022-05-30T18:39:34.091Z',
		important: false,
	},
	{
		id: 3,
		content: 'GET and POST are the most important methods of HTTP protocol',
		date: '2022-05-30T19:20:14.298Z',
		important: true,
	},
];

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
	if (note) {
		res.json(note);
	} else {
		res.status(404).end();
	}
});

app.post('/api/notes', (req, res) => {
	const generateId = () => {
		const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
		return maxId + 1;
	};

	const body = req.body;

	if (!body.content) {
		return res.status(400).json({
			error: 'content missing',
		});
	}

	const note = {
		content: body.content,
		important: body.important || false,
		date: new Date(),
		id: generateId(),
	};

	// Here you could also just have pushed into the already existing notes array, instead of reassigning
	notes.push(note);

	// This would not be good, cause we are changing the spot in memory by reassigning the array itself
	// notes = notes.concat(note);

	// res.json(note);
	res.json(notes);
});

app.delete('/api/notes/:id', (req, res) => {
	const id = Number(req.params.id);
	notes = notes.filter((note) => note.id !== id);

	res.status(204).end();
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
