// Adding character experience

const aurora = {
	name: 'Aurora',
	health: 150,
	strength: 25,
	xp: 0,
	level: 1,
	describe() {
		console.log(
			`${this.name} is level ${this.level} and has ${this.xp} xp. Health: ${this.health} - Strength: ${this.strength}`
		);
	},
};

// Modeling a dog

const dog = {
	name: 'Fang',
	species: 'baarhound',
	size: 75,
	bark() {
		return 'GRR! GRR!';
	},
};

// Modeling a circle

const r = Number(prompt('Enter the circle radius:'));

const circle = {
	circumference() {
		return 2 * Math.PI * r;
	},
	area() {
		return Math.PI * Math.pow(r, 2);
	},
};

// Modeling a bank account

const account = {
	name: 'Alex',
	balance: 0,
	credit(num) {
		this.balance += num;
	},
	describe() {
		console.log(`owner: ${this.name}, balance: ${this.balance}`);
	},
};
