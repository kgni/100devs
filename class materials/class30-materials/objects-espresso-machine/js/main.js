//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
	constructor(brand, model, year, price) {
		this._brand = brand;
		this._model = model;
		this._year = year;
		this._price = price;
		this._isOn = false;
	}

	get brand() {
		return this._brand;
	}

	get model() {
		return this._model;
	}

	get year() {
		return this._year;
	}

	get price() {
		return this._price;
	}

	get isOn() {
		return this._isOn;
	}

	toggleOn() {
		this._isOn = !this._isOn;
		console.log(this._isOn);
	}

	set model(name) {
		this._model = name;
	}
}

const italian = new EspressoMachine('ITALIA', 'ITALIA2000', 2017, 999);
