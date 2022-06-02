const e = require('express');
const { request } = require('express');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.static('public'));

const rappers = {
	'21 savage': {
		age: 29,
		birthName: 'Shéyaa Bin Abraham-Joseph',
		birthLocation: 'London, England',
	},
	'chance the rapper': {
		age: 29,
		birthName: 'Chancelor Bennet',
		birthLocation: 'Chicago, Illinois',
	},
	dylan: {
		age: 29,
		birthName: 'Dylan',
		birthLocation: 'Dylan',
	},
};

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api/:rapperName', (req, res) => {
	const rapperName = req.params.rapperName.toLowerCase();
	if (rappers[rapperName]) {
		res.json(rappers[rapperName]);
	} else {
		res.json(rappers['dylan']);
	}
	res.json(rappers);
});

app.listen(PORT, () => {
	console.log(`The server is running on PORT ${PORT}`);
});
