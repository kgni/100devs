const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
	const page = url.parse(req.url).pathname;
	const params = querystring.parse(url.parse(req.url).query);
	console.log(page);
	if (page == '/') {
		fs.readFile('index.html', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else if (page == '/api') {
		if ('choice' in params) {
			const computerChoices = [
				{
					computerChoice: 'rock',
					computerImg:
						'https://i.pinimg.com/originals/4d/40/db/4d40dbef4879e329e9e9309ca3320470.png',
				},
				{
					computerChoice: 'paper',
					computerImg:
						'https://www.nicepng.com/png/detail/45-455986_the-gallery-for-notebook-paper-texture-png-notebook.png',
				},
				{
					computerChoice: 'scissors',
					computerImg:
						'https://upload.wikimedia.org/wikipedia/commons/0/0c/Small_pair_of_blue_scissors.png',
				},
			];
			const randNum = Math.floor(Math.random() * computerChoices.length);

			if (params['choice'] === 'rock') {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				const objToJson = [
					{
						player: {
							playerChoice: 'rock',
							playerImg:
								'https://i.pinimg.com/originals/4d/40/db/4d40dbef4879e329e9e9309ca3320470.png',
						},
					},

					{
						computer: computerChoices[randNum],
					},
				];
				res.end(JSON.stringify(objToJson));
			} //choice = leon
			else if (params['choice'] === 'paper') {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				const objToJson = [
					{
						player: {
							playerChoice: 'paper',
							playerImg:
								'https://www.nicepng.com/png/detail/45-455986_the-gallery-for-notebook-paper-texture-png-notebook.png',
						},
					},

					{
						computer: computerChoices[randNum],
					},
				];
				res.end(JSON.stringify(objToJson));
			} else if (params['choice'] === 'scissors') {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				const objToJson = [
					{
						player: {
							playerChoice: 'scissors',
							playerImg:
								'https://upload.wikimedia.org/wikipedia/commons/0/0c/Small_pair_of_blue_scissors.png',
						},
					},

					{
						computer: computerChoices[randNum],
					},
				];
				res.end(JSON.stringify(objToJson));
			}
		}
	} else if (page == '/css/style.css') {
		fs.readFile('css/style.css', function (err, data) {
			res.write(data);
			res.end();
		});
	} else if (page == '/js/main.js') {
		fs.readFile('js/main.js', function (err, data) {
			res.writeHead(200, { 'Content-Type': 'text/javascript' });
			res.write(data);
			res.end();
		});
	} else {
		figlet('404!!', function (err, data) {
			if (err) {
				console.log('Something went wrong...');
				console.dir(err);
				return;
			}
			res.write(data);
			res.end();
		});
	}
});

server.listen(8000);
