// We want to make a function that loops as many times as the argument passed. This should create a grid that is the number passed width and height.
// On odd lines the line should start with a empty space followed by #
// On every even lines the line should start with # followed by an empty space
// Nested loop with some output that starts with an empty string.

function chessBoard(num) {
	for (let i = 0; i < num; i++) {
		console.log('#');
	}
}

chessBoard(8);
