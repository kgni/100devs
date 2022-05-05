class Game {
	constructor() {
		this.isGameOver = false;
		this.turn = true;
		this.board = [
			['', '', ''],
			['', '', ''],
			['', '', ''],
		];
	}

	choose() {
		const squares = document.querySelectorAll('.square');
		for (let square of squares) {
			square.addEventListener('click', (e) => {
				if (this.turn && !e.target.innerText) {
					e.target.innerText = 'X';
					e.target.classList.add('X');
					e.target.style.backgroundColor = '#9ca3af';
					this.addToBoard(e);
					this.checkWin();
					this.turn = !this.turn;
				} else if (!this.turn && !e.target.innerText) {
					e.target.innerText = 'O';
					e.target.classList.add('O');
					e.target.style.backgroundColor = '#e5e7eb';
					this.addToBoard(e);
					this.checkWin();
					this.turn = !this.turn;
				}
			});
		}
	}

	addToBoard(e) {
		switch (true) {
			case e.target.classList.contains('square1'):
				if (this.turn) {
					this.board[0][0] = 'X';
					break;
				} else {
					this.board[0][0] = 'O';
					break;
				}
			case e.target.classList.contains('square2'):
				if (this.turn) {
					this.board[0][1] = 'X';
					break;
				} else {
					this.board[0][1] = 'O';
					break;
				}
			case e.target.classList.contains('square3'):
				if (this.turn) {
					this.board[0][2] = 'X';
					break;
				} else {
					this.board[0][2] = 'O';
					break;
				}
			case e.target.classList.contains('square4'):
				if (this.turn) {
					this.board[1][0] = 'X';
					break;
				} else {
					this.board[1][0] = 'O';
					break;
				}
			case e.target.classList.contains('square5'):
				if (this.turn) {
					this.board[1][1] = 'X';
					break;
				} else {
					this.board[1][1] = 'O';
					break;
				}
			case e.target.classList.contains('square6'):
				if (this.turn) {
					this.board[1][2] = 'X';
					break;
				} else {
					this.board[1][2] = 'O';
					break;
				}
			case e.target.classList.contains('square7'):
				if (this.turn) {
					this.board[2][0] = 'X';
					break;
				} else {
					this.board[2][0] = 'O';
					break;
				}
			case e.target.classList.contains('square8'):
				if (this.turn) {
					this.board[2][1] = 'X';
					break;
				} else {
					this.board[2][1] = 'O';
					break;
				}
			case e.target.classList.contains('square9'):
				if (this.turn) {
					this.board[2][2] = 'X';
					break;
				} else {
					this.board[2][2] = 'O';
					break;
				}
		}
	}

	checkWin() {
		for (let i = 0; i < this.board.length; i++) {
			//horizontal winning conditions
			if (
				this.board[i].reduce((acc, val) => acc + val) === 'XXX' ||
				this.board[i].reduce((acc, val) => acc + val) === 'OOO'
			) {
				this.isGameOver = true;
			}
			//vertical winning conditions
			let winning = '';
			for (let j = 0; j < this.board.length; j++) {
				winning += this.board[j][i];
				if (winning === 'XXX' || winning === 'OOO') {
					this.isGameOver = true;
				}
			}
		}
		//diagonal hard coded
		if (
			this.board[0][0] + this.board[1][1] + this.board[2][2] === 'OOO' ||
			this.board[0][0] + this.board[1][1] + this.board[2][2] === 'XXX'
		) {
			this.isGameOver = true;
		}
		if (
			this.board[0][2] + this.board[1][1] + this.board[2][0] === 'OOO' ||
			this.board[0][2] + this.board[1][1] + this.board[2][0] === 'XXX'
		) {
			this.isGameOver = true;
		}
		//get winning player
		if (this.isGameOver) {
			const winnerText = document.querySelector('.winner-text');
			if (this.turn) {
				winnerText.innerText = 'X WON!';
			} else {
				winnerText.innerText = 'O WON!';
			}
			const winnerModal = document.querySelector('.winner-modal');
			winnerModal.classList.remove('hidden');

			const restartBtn = document.querySelector('.restart-button');

			function restart() {
				location.reload();
			}
			restartBtn.addEventListener('click', restart);
		}
	}

	play() {
		if (!this.isGameOver) {
			this.choose();
			this.checkWin();
		}
	}
}

const ticTacToe = new Game();

ticTacToe.play();
