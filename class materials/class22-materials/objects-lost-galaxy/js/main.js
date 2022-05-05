//Create a mouse object that has four properties and three methods
// let mouse = {
// 	size: 'Big',
// 	color: 'Brown',
// 	sick: true,
// 	isCatFood: true,
// 	sayNoise() {
// 		console.log('MEEP MEEP');
// 	},
// 	eat() {
// 		console.log('NOM NOM');
// 	},
// 	sleep() {
// 		console.log('SO TIRED');
// 	},
// };

function MakeMouse(name, size, color, sick, isCatFood) {
	this.name = name;
	this.size = size;
	this.color = color;
	this.sick = sick;
	this.isCatFood = isCatFood;
	this.sayNoise = function () {
		console.log('MEEP MEEP');
	};
	this.eat = function () {
		console.log('NOM NOM');
	};
}
