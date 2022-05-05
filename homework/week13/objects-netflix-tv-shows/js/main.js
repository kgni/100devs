//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
	constructor(show, length, rating, genre) {
		this.show = show;
		this.length = length;
		this.rating = rating;
		this.genre = genre;
	}

	play() {
		console.log(`Now playing ${this.show}`);
	}

	stop() {
		console.log(`Stopped ${this.show}`);
	}

	getLength() {
		console.log(`${this.show} is ${this.length} long`);
	}
}

let narcos = new NetflixShow('Narcos', '11 episodes', 9.3, `crime`);
