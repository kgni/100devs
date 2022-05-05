// TODO - Figure out how to show winner
// TODO - Reset the board array to empty (when clicking reset button)
// TODO - Do it with OOP instead now
// TODO - fix so hover doesnt change when a winner has been found

let board = [
	['', '', ''],
	['', '', ''],
	['', '', ''],
];
let isGameOver = false;
let turn = 'playerX';

const squares = Array.from(document.querySelectorAll('.square'));
const resetButton = document.querySelector('.reset-button');
const turnDisplay = document.querySelector('p');

for (square of squares) {
	square.addEventListener('click', (e) => {
		if (
			e.target.innerText === '' &&
			turn === 'playerX' &&
			isGameOver === false
		) {
			e.target.innerText = 'X';
			e.target.style.backgroundColor = '#9c9c9c';
			fillSquareX(e.target.id);
			console.log(e.target);
			turn = 'playerO';
			turnDisplay.innerText = 'O turn';
			checkWinner();
		}

		if (
			e.target.innerText === '' &&
			turn === 'playerO' &&
			isGameOver === false
		) {
			e.target.innerText = 'O';
			fillSquareO(e.target.id);
			console.log(e.target);
			turn = 'playerX';
			turnDisplay.innerText = 'X turn';
			checkWinner();
		}
	});
}

function fillSquareX(id) {
	if (id === 'square1') {
		board[0][0] = 'X';
	}
	if (id === 'square2') {
		board[0][1] = 'X';
	}
	if (id === 'square3') {
		board[0][2] = 'X';
	}

	if (id === 'square4') {
		board[1][0] = 'X';
	}

	if (id === 'square5') {
		board[1][1] = 'X';
	}

	if (id === 'square6') {
		board[1][2] = 'X';
	}

	if (id === 'square7') {
		board[2][0] = 'X';
	}

	if (id === 'square8') {
		board[2][1] = 'X';
	}

	if (id === 'square9') {
		board[2][2] = 'X';
	}
}

function fillSquareO(id) {
	if (id === 'square1') {
		board[0][0] = 'O';
	}
	if (id === 'square2') {
		board[0][1] = 'O';
	}
	if (id === 'square3') {
		board[0][2] = 'O';
	}

	if (id === 'square4') {
		board[1][0] = 'O';
	}

	if (id === 'square5') {
		board[1][1] = 'O';
	}

	if (id === 'square6') {
		board[1][2] = 'O';
	}

	if (id === 'square7') {
		board[2][0] = 'O';
	}

	if (id === 'square8') {
		board[2][1] = 'O';
	}

	if (id === 'square9') {
		board[2][2] = 'O';
	}
}

function checkWinner() {
	for (let i = 0; i < board.length; i++) {
		// horizontal winning conditions

		if (
			board[i].reduce((acc, c) => acc + c) === 'XXX' ||
			board[i].reduce((acc, c) => acc + c) === 'OOO'
		) {
			isGameOver = true;
		}

		// vertical winning conditions
		let vertical = '';
		for (let j = 0; j < board.length; j++) {
			vertical += board[j][i];
			if (vertical === 'XXX' || vertical === 'OOO') {
				isGameOver = true;
			}
		}
	}

	// diagonal hard coded
	if (
		board[0][0] + board[1][1] + board[2][2] === 'OOO' ||
		board[0][0] + board[1][1] + board[2][2] === 'XXX'
	) {
		isGameOver = true;
	}
	if (
		board[0][2] + board[1][1] + board[2][0] === 'OOO' ||
		board[0][2] + board[1][1] + board[2][0] === 'XXX'
	) {
		isGameOver = true;
	}
}

resetButton.addEventListener('click', () => {
	isGameOver = false;
	turn = 'playerX';
	turnDisplay.innerText = 'X turn';

	squares.forEach((square) => (square.innerText = ''));
	squares.forEach((square) => (square.style.backgroundColor = '#ededed'));
});

//

// class Game {
// 	constructor() {
// 		this.playerOne = 'X';
// 		this.playerTwo = 'O';
// 		this.isGameOver = false;
// 		this.turn = 'playerOne';
// 		this.board = [
// 			['', '', ''],
// 			['', '', ''],
// 			['', '', ''],
// 		];
// 	}
// }
