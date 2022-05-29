document.querySelector('#clickMe').addEventListener('click', makeReq);

async function makeReq() {
	const choice = document.querySelector('#choice').value;
	console.log(choice);
	const res = await fetch(`/api?choice=${choice}`);
	const data = await res.json();

	const playerData = data[0].player;
	const computerData = data[1].computer;

	if (playerData.playerChoice === computerData.computerChoice) {
		document.querySelector('.winner').innerText = `DRAW`;
	} else {
		const rules = {
			rock: 'scissors',
			paper: 'rock',
			scissors: 'paper',
		};
		if (rules[playerData.playerChoice] === computerData.computerChoice) {
			document.querySelector('.winner').innerText = `Player WON`;
		} else {
			document.querySelector('.winner').innerText = `Computer WON`;
		}
	}

	console.log(data[0].player.playerChoice);
	document.querySelector('.playerChoice').textContent = playerData.playerChoice;
	document.querySelector('.playerImg').src = playerData.playerImg;

	document.querySelector('.computerChoice').textContent =
		computerData.computerChoice;
	document.querySelector('.computerImg').src = computerData.computerImg;
}
