//Create a constructor with 4 properties and 3 methods
function Pizza(brand, toppings, size, sauce, crust) {
	this.brand = brand;
	this.toppings = toppings;
	this.size = size;
	this.sauce = sauce;
	this.crust = crust;

	this.pizza = function () {
		console.log(
			`Your pizza is from ${
				this.brand
			} has the size ${this.size.toLowerCase()}. You chose ${this.sauce.toLowerCase()} sauce and ${this.crust.toLowerCase()} crust.`
		);
	};

	this.deliveryTime = function () {
		console.log('Calculating....');
	};

	this.frisbee = function () {
		console.log('YEEEET');
	};
}

let margherita = new Pizza(
	'Dominos',
	['pepperoni', 'pineapple'],
	'Large',
	'Heavy',
	'Thin'
);
