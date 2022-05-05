//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, gender, speed, height, hp) {
	this.name = name;
	this.gender = gender;
	this.speed = speed;
	this.height = height;
	this.hp = hp;
	this.subHp = function () {
		this.hp--;
	};
	this.addHp = function () {
		this.hp++;
	};
	this.attack = function () {
		console.log('HADOOOKEN');
	};
}

let diller = new StreetFighter('Diller', 'Mand', 'Hurtig', 180, 100);
