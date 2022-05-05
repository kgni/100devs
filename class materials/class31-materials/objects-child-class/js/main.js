//Create an a class and extend it - Can be anything you would like it to be!

class Animal {
	constructor(name, age, isFriendly) {
		this.name = name;
		this.age = age;
		this.isFriendly = isFriendly;
	}
	speak() {
		console.log(`${this.name} makes a sound`);
	}
	describe() {
		if (this.isFriendly) {
			console.log(`${this.name} is ${this.age} years old, and is friendly!`);
		} else {
			console.log(
				`${this.name} is ${this.age} years old, and is NOT friendly!`
			);
		}
	}
}

class Dog extends Animal {
	constructor(name, age, isFriendly, breed) {
		super(name, age, isFriendly);
		this.breed = breed;
	}

	bark() {
		console.log(`${this.name} barks: WOOF WOOF`);
	}
}

const fido = new Dog('Fido', 12, true, 'Labrador');

class Cat extends Animal {
	constructor(name, age, isFriendly, breed) {
		super(name, age, isFriendly);
		this.breed = breed;
		this._hungry = false;
	}

	meow() {
		console.log(`${this.name} meows: MEOW MEOW`);
	}

	get hungry() {
		if (this._hungry) {
			console.log(`${this.name} is hungry`);
		} else {
			console.log(`${this.name} is NOT hungry`);
		}
	}

	toggleHunger() {
		this._hungry = !this._hungry;

		if (this._hungry) {
			console.log(`${this.name} is now hungry`);
		} else {
			console.log(`${this.name} is now full`);
		}
	}
}

const simba = new Cat('Simba', 12, false, 'Scottish');
