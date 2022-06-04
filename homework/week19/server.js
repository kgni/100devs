const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
	res.send('Hello World');
});

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

app.listen(process.env.PORT || PORT, () => {
	console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
