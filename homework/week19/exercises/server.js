const express = require('express');
const { nanoid } = require('nanoid');
const app = express();
const morgan = require('morgan');
const PORT = 8000;

app.use(express.json());
morgan.token('content', function (req, res) {
	return req.body;
});
app.use(morgan('tiny'));

let persons = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-123456',
	},
	{
		id: 2,
		name: 'Ada Lovelace',
		number: '39-44-5323523',
	},
	{
		id: 3,
		name: 'Dan Abramov',
		number: '12-43-234345',
	},
	{
		id: 4,
		name: 'Mary Poppendieck',
		number: '39-23-6423122',
	},
];

app.get('/api/persons', (req, res) => {
	res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
	const id = req.params.id;

	const person = persons.find((el) => el.id == id);

	if (person) {
		res.json(person);
	} else {
		res.status(404).end();
	}
});

app.post('/api/persons/', (req, res) => {
	if (!req.body.name || !req.body.number) {
		return res.status(400).json({
			error: 'name or number missing',
		});
	}

	if (persons.some((person) => person.name === req.body.name)) {
		return res.status(400).json({
			error: 'Name already exists',
		});
	}

	const person = {
		id: nanoid(),
		name: req.body.name,
		number: req.body.number,
	};

	persons.push(person);

	res.json(persons);
});

// delete request route. Here we are taking the id from the parameter, then we are reassigning the array to a new array containing every element, except the element that matches the id

app.delete('/api/persons/:id', (req, res) => {
	const id = req.params.id;

	persons = persons.filter((person) => person.id != id);
	console.log(persons);
	res.json(persons);

	// res.status(204).end();
});

app.get('/info', (req, res) => {
	res.send(`Phonebook has info for ${persons.length} people\n ${new Date()}`);
});

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

app.listen(PORT, () => {
	console.log(`LISTENING ON PORT ${PORT}`);
});
