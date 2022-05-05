//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function Skater(name, age, level) {
	this.name = name;
	this.age = age;
	this.level = level;
	this.awards = 0;

	this.levelUp = function () {
		this.level++;
	};
	this.newAward = function () {
		this.awards++;
	};
	this.breakLeg = function () {
		console.log('OUUUCH!');
	};
}

let tony = new Skater('Tony Hawk', 36, 2);
