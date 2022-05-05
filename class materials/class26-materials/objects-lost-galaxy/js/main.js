//Create a pizza object that has four properties and three methods

const pizza = {};

pizza.ingredients = ['pepperoni', 'onion', 'cheese', 'tomato', 'pineapple'];

pizza.size = 'large';

pizza.shape = 'round';

pizza.brand = 'Dominos';

pizza.sauce = true;

pizza.removeIngredient = function (ingredient) {
	let ingredientIndex = pizza.ingredients.indexOf(ingredient);
	let removedItem = pizza.ingredients.splice(ingredientIndex, 1);

	if (ingredientIndex === -1) {
		console.log('Ingredient not found');
	} else {
		console.log(`${removedItem} removed from the list`);
	}

	console.log(`You now have the following ingredients: ${pizza.ingredients}`);
};

pizza.listIngredients = function () {
	pizza.ingredients.forEach((ingredient) => console.log(ingredient));
};

pizza.addIngredient = function (ingredient) {
	if (typeof ingredient !== 'string') {
		console.log('ERROR, INGREDIENT HAS TO BE A STRING');
	} else {
		pizza.ingredients.push(ingredient);
		console.log(
			`${pizza.ingredients[pizza.ingredients.length - 1]} added to the list`
		);
	}
};
