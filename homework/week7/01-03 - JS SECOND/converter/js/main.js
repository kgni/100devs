//Write your pseduo code first!

// THIS IS TOO BIG BRAINING IT! NOT ENOUGH PLAIN ENGLISH.
// Make calculator for calculating celcius to fahrenheit, and printing it in the DOM.DOM
// First we select our elements, both input and button and store them in a variable. On the button we listen for clicks to later fire a function that will run on the value that has been put into our input.
// We also select our empty element, that we will use to print our result to the DOM and store it in a variable
// When we have our input selected, we take the value of that input, store it and run it in our function that is going to be fired on a click event on the button.

// In the function, we are taking the input value and multiplying it by 33.8 (1:33.8, is the ratio from celsius to fahrenheit). and reassigning it to the variable which holds the input.
// Then we set the variable for the empy elemets innerText, equal to the variable that now holds the calculated fahrenheit.

// The way leon would do it:
// 0 - 32
// need the value that is in celcius.
// convert from celcius to fahrenheit
// print the fahrenheit to the DOM

// Click tab, get class of active, remove other classes of active.

let tab1 = document.querySelector('.tab-1');
tab1.addEventListener('click', addActive1);
let tab2 = document.querySelector('.tab-2');
tab2.addEventListener('click', addActive2);
let tab3 = document.querySelector('.tab-3');
tab3.addEventListener('click', addActive3);

let convertedContainerLength = document.querySelector('.converter-length');
let convertedContainerWeight = document.querySelector('.converter-weight');
let convertedContainerSpeed = document.querySelector('.converter-speed');

function addActive1() {
	tab1.classList.add('active-tab');
	tab2.classList.remove('active-tab');
	tab3.classList.remove('active-tab');
	convertedContainerLength.classList.remove('hidden');
	convertedContainerWeight.classList.add('hidden');
	convertedContainerSpeed.classList.add('hidden');
}
function addActive2() {
	tab2.classList.add('active-tab');
	tab3.classList.remove('active-tab');
	tab1.classList.remove('active-tab');
	convertedContainerWeight.classList.remove('hidden');
	convertedContainerLength.classList.add('hidden');
	convertedContainerSpeed.classList.add('hidden');
}
function addActive3() {
	tab3.classList.add('active-tab');
	tab1.classList.remove('active-tab');
	tab2.classList.remove('active-tab');
	convertedContainerSpeed.classList.remove('hidden');
	convertedContainerLength.classList.add('hidden');
	convertedContainerWeight.classList.add('hidden');
}

// select unit, get the input out, convert.

// document.querySelector('#length-input').addEventListener('onkeyup', convertLengths);

// input.addEventListener('change', doConvert);

document
	.querySelector('.select-length')
	.addEventListener('change', addHiddenClassOnChangeLength);

document.querySelector('.btn-length').addEventListener('click', convertLengths);

function addHiddenClassOnChangeLength() {
	let input = document.querySelector('#length-input').value;
	let select = document.querySelector('.select-length').value;
	let kilometers = document.querySelector('.kilometers-container');
	let miles = document.querySelector('.miles-container');
	let meters = document.querySelector('.meters-container');
	let centimeters = document.querySelector('.centimeters-container');
	let millimeters = document.querySelector('.millimeters-container');
	let inches = document.querySelector('.inches-container');
	let feet = document.querySelector('.feet-container');

	let convertedItems = document.querySelectorAll('.converted-item');

	Array.from(convertedItems).forEach(
		(convertedItem) => (convertedItem.innerText = '')
	);

	if (select === 'kilometers') {
		kilometers.classList.add('hidden');
		miles.classList.remove('hidden');
		meters.classList.remove('hidden');
		centimeters.classList.remove('hidden');
		millimeters.classList.remove('hidden');
		inches.classList.remove('hidden');
		feet.classList.remove('hidden');
	} else if (select === 'miles') {
		kilometers.classList.remove('hidden');
		miles.classList.add('hidden');
		meters.classList.remove('hidden');
		centimeters.classList.remove('hidden');
		millimeters.classList.remove('hidden');
		inches.classList.remove('hidden');
		feet.classList.remove('hidden');
	} else if (select === 'meters') {
		kilometers.classList.remove('hidden');
		miles.classList.remove('hidden');
		meters.classList.add('hidden');
		centimeters.classList.remove('hidden');
		millimeters.classList.remove('hidden');
		inches.classList.remove('hidden');
		feet.classList.remove('hidden');
	} else if (select === 'centimeters') {
		kilometers.classList.remove('hidden');
		miles.classList.remove('hidden');
		meters.classList.remove('hidden');
		centimeters.classList.add('hidden');
		millimeters.classList.remove('hidden');
		inches.classList.remove('hidden');
		feet.classList.remove('hidden');
	} else if (select === 'millimeters') {
		kilometers.classList.remove('hidden');
		miles.classList.remove('hidden');
		meters.classList.remove('hidden');
		centimeters.classList.remove('hidden');
		millimeters.classList.add('hidden');
		inches.classList.remove('hidden');
		feet.classList.remove('hidden');
	} else if (select === 'inches') {
		kilometers.classList.remove('hidden');
		miles.classList.remove('hidden');
		meters.classList.remove('hidden');
		centimeters.classList.remove('hidden');
		millimeters.classList.remove('hidden');
		inches.classList.add('hidden');
		feet.classList.remove('hidden');
	} else if (select === 'feet') {
		kilometers.classList.remove('hidden');
		miles.classList.remove('hidden');
		meters.classList.remove('hidden');
		centimeters.classList.remove('hidden');
		millimeters.classList.remove('hidden');
		inches.classList.remove('hidden');
		feet.classList.add('hidden');
	}
}

function convertLengths() {
	let input = document.querySelector('#length-input').value;
	let select = document.querySelector('.select-length').value;
	let kilometers = document.querySelector('.kilometers-converted');
	let miles = document.querySelector('.miles-converted');
	let meters = document.querySelector('.meters-converted');
	let centimeters = document.querySelector('.centimeters-converted');
	let millimeters = document.querySelector('.millimeters-converted');
	let inches = document.querySelector('.inches-converted');
	let feet = document.querySelector('.feet-converted');

	let kilometersContainer = document.querySelector('.kilometers-container');
	let milesContainer = document.querySelector('.miles-container');
	let metersContainer = document.querySelector('.meters-container');
	let centimetersContainer = document.querySelector('.centimeters-container');
	let millimetersContainer = document.querySelector('.millimeters-container');
	let inchesContainer = document.querySelector('.inches-container');
	let feetContainer = document.querySelector('.feet-container');

	if (isNaN(input) || input === '') {
		alert('please enter a number');
	} else if (select === 'kilometers') {
		kilometersContainer.classList.add('hidden');
		milesContainer.classList.remove('hidden');
		metersContainer.classList.remove('hidden');
		centimetersContainer.classList.remove('hidden');
		millimetersContainer.classList.remove('hidden');
		inchesContainer.classList.remove('hidden');
		feetContainer.classList.remove('hidden');

		miles.innerText = `${(input * 0.621371).toFixed(2)}`;
		meters.innerText = `${(input * 1000).toFixed(0)}`;
		centimeters.innerText = `${(input * 100000).toFixed(0)}`;
		millimeters.innerText = `${(input * 1000000).toFixed(0)}`;
		inches.innerText = `${(input * 39370.1).toFixed(0)}`;
		feet.innerText = `${(input * 3280.84).toFixed(0)}`;
	} else if (select === 'miles') {
		kilometersContainer.classList.remove('hidden');
		milesContainer.classList.add('hidden');
		metersContainer.classList.remove('hidden');
		centimetersContainer.classList.remove('hidden');
		millimetersContainer.classList.remove('hidden');
		inchesContainer.classList.remove('hidden');
		feetContainer.classList.remove('hidden');

		kilometers.innerText = `${(input * 1.60934).toFixed(2)}`;
		meters.innerText = `${(input * 1609.34).toFixed(2)}`;
		centimeters.innerText = `${(input * 160934).toFixed(0)}`;
		millimeters.innerText = `${(input * 1609344).toFixed(0)}`;
		inches.innerText = `${(input * 63360).toFixed(0)}`;
		feet.innerText = `${(input * 5280).toFixed(0)}`;
	} else if (select === 'meters') {
		kilometersContainer.classList.remove('hidden');
		milesContainer.classList.remove('hidden');
		metersContainer.classList.add('hidden');
		centimetersContainer.classList.remove('hidden');
		millimetersContainer.classList.remove('hidden');
		inchesContainer.classList.remove('hidden');
		feetContainer.classList.remove('hidden');

		kilometers.innerText = `${(input * 0.001).toFixed(3)}`;
		miles.innerText = `${(input * 0.000621371).toFixed(5)}`;
		centimeters.innerText = `${input * 100}`;
		millimeters.innerText = `${input * 1000}`;
		inches.innerText = `${(input * 39.37).toFixed(2)}`;
		feet.innerText = `${input * 3.28}`;
	} else if (select === 'centimeters') {
		kilometersContainer.classList.remove('hidden');
		milesContainer.classList.remove('hidden');
		metersContainer.classList.remove('hidden');
		centimetersContainer.classList.add('hidden');
		millimetersContainer.classList.remove('hidden');
		inchesContainer.classList.remove('hidden');
		feetContainer.classList.remove('hidden');

		kilometers.innerText = `${(input * 0.00001).toFixed(5)}`;
		miles.innerText = `${(input * 0.0000062137).toFixed(7)}`;
		meters.innerHTML = `${input / 100}`;
		millimeters.innerHTML = `${input * 10}`;
		inches.innerHTML = `${input * 0.3937}`;
		feet.innerHTML = `${input * 0.0328}`;
	} else if (select === 'millimeters') {
		kilometersContainer.classList.remove('hidden');
		milesContainer.classList.remove('hidden');
		metersContainer.classList.remove('hidden');
		centimetersContainer.classList.remove('hidden');
		millimetersContainer.classList.add('hidden');
		inchesContainer.classList.remove('hidden');
		feetContainer.classList.remove('hidden');

		kilometers.innerText = `${(input * 0.000001).toFixed(7)}`;
		miles.innerText = `${(input * 0.00000062137).toFixed(9)}`;
		meters.innerHTML = `${input / 1000}`;
		centimeters.innerHTML = `${(input / 10).toFixed(2)}`;
		inches.innerHTML = `${(input * 0.0393701).toFixed(4)}`;
		feet.innerHTML = `${(input * 0.00328084).toFixed(4)}`;
	} else if (select === 'inches') {
		kilometersContainer.classList.remove('hidden');
		milesContainer.classList.remove('hidden');
		metersContainer.classList.remove('hidden');
		centimetersContainer.classList.remove('hidden');
		millimetersContainer.classList.remove('hidden');
		inchesContainer.classList.add('hidden');
		feetContainer.classList.remove('hidden');

		kilometers.innerText = `${(input * 0.0000254).toFixed(7)}`;
		miles.innerText = `${(input * 0.0000157828).toFixed(7)}`;
		meters.innerHTML = `${(input * 0.0254).toFixed(4)}`;
		centimeters.innerHTML = `${input * 2.54}`;
		millimeters.innerHTML = `${input * 25.4}`;
		feet.innerHTML = `${(input * 0.0833333).toFixed(4)}`;
	} else if (select === 'feet') {
		kilometersContainer.classList.remove('hidden');
		milesContainer.classList.remove('hidden');
		metersContainer.classList.remove('hidden');
		centimetersContainer.classList.remove('hidden');
		millimetersContainer.classList.remove('hidden');
		inchesContainer.classList.remove('hidden');
		feetContainer.classList.add('hidden');

		kilometers.innerText = `${(input * 0.0003048).toFixed(5)}`;
		miles.innerText = `${(input * 0.000189394).toFixed(5)}`;
		meters.innerHTML = `${(input * 0.3048).toFixed(2)}`;
		centimeters.innerHTML = `${input * 30.48} `;
		millimeters.innerHTML = `${(input * 304.8).toFixed(2)}`;
		inches.innerHTML = `${input * 12}`;
	}
}

document
	.querySelector('.select-weight')
	.addEventListener('change', addHiddenClassOnChangeWeight);

document.querySelector('.btn-weight').addEventListener('click', convertWeights);

function addHiddenClassOnChangeWeight() {
	let input = document.querySelector('#weight-input').value;
	let select = document.querySelector('.select-weight').value;
	let ton = document.querySelector('.ton-container');
	let kilogram = document.querySelector('.kilogram-container');
	let gram = document.querySelector('.gram-container');

	let milligram = document.querySelector('.milligram-container');
	let pound = document.querySelector('.pound-container');
	let ounce = document.querySelector('.ounce-container');
	let stone = document.querySelector('.stone-container');

	let convertedItems = document.querySelectorAll('.converted-item');

	Array.from(convertedItems).forEach(
		(convertedItem) => (convertedItem.innerText = '')
	);

	if (select === 'ton') {
		ton.classList.add('hidden');
		kilogram.classList.remove('hidden');
		gram.classList.remove('hidden');
		milligram.classList.remove('hidden');
		pound.classList.remove('hidden');
		ounce.classList.remove('hidden');
		stone.classList.remove('hidden');
	} else if (select === 'kilogram') {
		ton.classList.remove('hidden');
		kilogram.classList.add('hidden');
		gram.classList.remove('hidden');
		milligram.classList.remove('hidden');
		pound.classList.remove('hidden');
		ounce.classList.remove('hidden');
		stone.classList.remove('hidden');
	} else if (select === 'gram') {
		ton.classList.remove('hidden');
		kilogram.classList.remove('hidden');
		gram.classList.add('hidden');
		milligram.classList.remove('hidden');
		pound.classList.remove('hidden');
		ounce.classList.remove('hidden');
		stone.classList.remove('hidden');
	} else if (select === 'milligram') {
		ton.classList.remove('hidden');
		kilogram.classList.remove('hidden');
		gram.classList.remove('hidden');
		milligram.classList.add('hidden');
		pound.classList.remove('hidden');
		ounce.classList.remove('hidden');
		stone.classList.remove('hidden');
	} else if (select === 'pound') {
		ton.classList.remove('hidden');
		kilogram.classList.remove('hidden');
		gram.classList.remove('hidden');
		milligram.classList.remove('hidden');
		pound.classList.add('hidden');
		ounce.classList.remove('hidden');
		stone.classList.remove('hidden');
	} else if (select === 'ounce') {
		ton.classList.remove('hidden');
		kilogram.classList.remove('hidden');
		gram.classList.remove('hidden');
		milligram.classList.remove('hidden');
		pound.classList.remove('hidden');
		ounce.classList.add('hidden');
		stone.classList.remove('hidden');
	} else if (select === 'stone') {
		ton.classList.remove('hidden');
		kilogram.classList.remove('hidden');
		gram.classList.remove('hidden');
		milligram.classList.remove('hidden');
		pound.classList.remove('hidden');
		ounce.classList.remove('hidden');
		stone.classList.add('hidden');
	}
}

function convertWeights() {
	let input = document.querySelector('#weight-input').value;
	let select = document.querySelector('.select-weight').value;
	let ton = document.querySelector('.ton-converted');
	let kilogram = document.querySelector('.kilogram-converted');
	let gram = document.querySelector('.gram-converted');
	let milligram = document.querySelector('.milligram-converted');
	let pound = document.querySelector('.pound-converted');
	let ounce = document.querySelector('.ounce-converted');
	let stone = document.querySelector('.stone-converted');

	let tonContainer = document.querySelector('.ton-container');
	let kilogramContainer = document.querySelector('.kilogram-container');
	let gramContainer = document.querySelector('.gram-container');
	let milligramContainer = document.querySelector('.milligram-container');
	let poundContainer = document.querySelector('.pound-container');
	let ounceContainer = document.querySelector('.ounce-container');
	let stoneContainer = document.querySelector('.stone-container');

	if (isNaN(input) || input === '') {
		alert('please enter a number');
	} else if (select === 'ton') {
		tonContainer.classList.add('hidden');
		kilogramContainer.classList.remove('hidden');
		gramContainer.classList.remove('hidden');
		milligramContainer.classList.remove('hidden');
		poundContainer.classList.remove('hidden');
		ounceContainer.classList.remove('hidden');
		stoneContainer.classList.remove('hidden');

		kilogram.innerText = `${(input * 1000).toFixed(0)}`;
		gram.innerText = `${(input * 1e6).toFixed(0)}`;
		milligram.innerText = `${(input * 1e9).toFixed(0)}`;
		pound.innerText = `${(input * 2204.62).toFixed(0)}`;
		ounce.innerText = `${(input * 35273.9199982575).toFixed(0)}`;
		stone.innerText = `${(input * 157.47285713507812943).toFixed(0)}`;
	} else if (select === 'kilogram') {
		tonContainer.classList.remove('hidden');
		kilogramContainer.classList.add('hidden');
		gramContainer.classList.remove('hidden');
		milligramContainer.classList.remove('hidden');
		poundContainer.classList.remove('hidden');
		ounceContainer.classList.remove('hidden');
		stoneContainer.classList.remove('hidden');

		ton.innerText = `${(input * 0.001).toFixed(3)}`;
		gram.innerText = `${(input * 1000).toFixed(0)}`;
		milligram.innerText = `${(input * 1e6).toFixed(0)}`;
		pound.innerText = `${(input * 2.20462).toFixed(0)}`;
		ounce.innerText = `${(input * 35.2739199982575).toFixed(0)}`;
		stone.innerText = `${(input * 0.15747285713507810923).toFixed(2)}`;
	} else if (select === 'gram') {
		tonContainer.classList.remove('hidden');
		kilogramContainer.classList.remove('hidden');
		gramContainer.classList.add('hidden');
		milligramContainer.classList.remove('hidden');
		poundContainer.classList.remove('hidden');
		ounceContainer.classList.remove('hidden');
		stoneContainer.classList.remove('hidden');

		ton.innerText = `${(input * 1e-6).toFixed(6)}`;
		kilogram.innerText = `${(input * 0.001).toFixed(4)}`;
		milligram.innerText = `${(input * 1000).toFixed(0)}`;
		pound.innerText = `${(input * 0.00220462).toFixed(4)}`;
		ounce.innerText = `${(input * 0.0352739200000000003).toFixed(4)}`;
		stone.innerText = `${(input * 0.00015747285714285715183).toFixed(4)}`;
	} else if (select === 'milligram') {
		tonContainer.classList.remove('hidden');
		kilogramContainer.classList.remove('hidden');
		gramContainer.classList.remove('hidden');
		milligramContainer.classList.add('hidden');
		poundContainer.classList.remove('hidden');
		ounceContainer.classList.remove('hidden');
		stoneContainer.classList.remove('hidden');

		ton.innerText = `${(input * 1e-9).toFixed(10)}`;
		kilogram.innerText = `${(input * 1e-6).toFixed(7)}`;
		gram.innerText = `${(input * 0.001).toFixed(4)}`;
		pound.innerText = `${(input * 2.2046e-6).toFixed(7)}`;
		ounce.innerText = `${(input * 3.5274e-5).toFixed(6)}`;
		stone.innerText = `${(input * 1.5747e-7).toFixed(8)}`;
	} else if (select === 'pound') {
		tonContainer.classList.remove('hidden');
		kilogramContainer.classList.remove('hidden');
		gramContainer.classList.remove('hidden');
		milligramContainer.classList.remove('hidden');
		poundContainer.classList.add('hidden');
		ounceContainer.classList.remove('hidden');
		stoneContainer.classList.remove('hidden');

		ton.innerText = `${(input * 0.000453592).toFixed(6)}`;
		kilogram.innerText = `${(input * 0.4535920000000000507).toFixed(3)}`;
		gram.innerText = `${(input * 453.59200000000004138).toFixed(0)}`;
		milligram.innerText = `${(input * 453592.00000000005821).toFixed(0)}`;
		ounce.innerText = `${(input * 15.999986948634079553).toFixed(0)}`;
		stone.innerText = `${(input * 0.0714286).toFixed(3)}`;
	} else if (select === 'ounce') {
		tonContainer.classList.remove('hidden');
		kilogramContainer.classList.remove('hidden');
		gramContainer.classList.remove('hidden');
		milligramContainer.classList.remove('hidden');
		poundContainer.classList.remove('hidden');
		ounceContainer.classList.add('hidden');
		stoneContainer.classList.remove('hidden');

		ton.innerText = `${(input * 2.835e-5).toFixed(7)}`;
		kilogram.innerText = `${(input * 0.028349999397).toFixed(6)}`;
		gram.innerText = `${(input * 28.349999396999994161).toFixed(1)}`;
		milligram.innerText = `${(input * 28349.999396999995952).toFixed(0)}`;
		pound.innerText = `${(input * 0.062501050000025343278).toFixed(4)}`;
		stone.innerText = `${(input * 0.0044643607142875246438).toFixed(4)}`;
	} else if (select === 'stone') {
		tonContainer.classList.remove('hidden');
		kilogramContainer.classList.remove('hidden');
		gramContainer.classList.remove('hidden');
		milligramContainer.classList.remove('hidden');
		poundContainer.classList.remove('hidden');
		ounceContainer.classList.remove('hidden');
		stoneContainer.classList.add('hidden');

		ton.innerText = `${(input * 0.00635029).toFixed(3)}`;
		kilogram.innerText = `${(input * 6.3502899999998812).toFixed(2)}`;
		gram.innerText = `${(input * 6350.2899999998808198).toFixed(0)}`;
		milligram.innerText = `${(input * 6350289.999999881722).toFixed(0)}`;
		pound.innerText = `${(input * 13.999992989299800072).toFixed(0)}`;
		ounce.innerText = `${(input * 223.99988782879680116).toFixed(0)}`;
	}
}

document
	.querySelector('.select-speed')
	.addEventListener('change', addHiddenClassOnChangeSpeed);

document.querySelector('.btn-speed').addEventListener('click', convertSpeed);

function addHiddenClassOnChangeSpeed() {
	let select = document.querySelector('.select-speed').value;
	let kmh = document.querySelector('.kilometers-hour-container');
	let mph = document.querySelector('.miles-hour-container');
	let knot = document.querySelector('.knot-container');
	let ms = document.querySelector('.meter-second-container');
	let fs = document.querySelector('.feet-second-container');

	let convertedItems = document.querySelectorAll('.converted-item');

	Array.from(convertedItems).forEach(
		(convertedItem) => (convertedItem.innerText = '')
	);

	if (select === 'kilometers') {
		kmh.classList.add('hidden');
		mph.classList.remove('hidden');
		knot.classList.remove('hidden');
		ms.classList.remove('hidden');
		fs.classList.remove('hidden');
	} else if (select === 'miles') {
		kmh.classList.remove('hidden');
		mph.classList.add('hidden');
		knot.classList.remove('hidden');
		ms.classList.remove('hidden');
		fs.classList.remove('hidden');
	} else if (select === 'knot') {
		kmh.classList.remove('hidden');
		mph.classList.remove('hidden');
		knot.classList.add('hidden');
		ms.classList.remove('hidden');
		fs.classList.remove('hidden');
	} else if (select === 'meters') {
		kmh.classList.remove('hidden');
		mph.classList.remove('hidden');
		knot.classList.remove('hidden');
		ms.classList.add('hidden');
		fs.classList.remove('hidden');
	} else if (select === 'feet') {
		kmh.classList.remove('hidden');
		mph.classList.remove('hidden');
		knot.classList.remove('hidden');
		ms.classList.remove('hidden');
		fs.classList.add('hidden');
	}
}

function convertSpeed() {
	let input = document.querySelector('#speed-input').value;
	let select = document.querySelector('.select-speed').value;
	let kmh = document.querySelector('.kilometers-hour-converted');
	let mph = document.querySelector('.miles-hour-converted');
	let knot = document.querySelector('.knot-converted');
	let ms = document.querySelector('.meter-second-converted');
	let fs = document.querySelector('.feet-second-converted');

	let kmhContainer = document.querySelector('.kilometers-hour-container');
	let mphContainer = document.querySelector('.miles-hour-container');
	let knotContainer = document.querySelector('.knot-container');
	let msContainer = document.querySelector('.meter-second-container');
	let fsContainer = document.querySelector('.feet-second-container');

	if (isNaN(input) || input === '') {
		alert('please enter a number');
	} else if (select === 'kilometers') {
		kmhContainer.classList.add('hidden');
		mphContainer.classList.remove('hidden');
		knotContainer.classList.remove('hidden');
		msContainer.classList.remove('hidden');
		fsContainer.classList.remove('hidden');

		mph.innerText = `${(input * 0.621371).toFixed(2)}`;
		knot.innerText = `${(input * 0.5399566368704161).toFixed(2)}`;
		ms.innerText = `${(input * 0.2777776918389111005).toFixed(2)}`;
		fs.innerText = `${(input * 0.91134413332976083044).toFixed(2)}`;
	} else if (select === 'miles') {
		kmhContainer.classList.remove('hidden');
		mphContainer.classList.add('hidden');
		knotContainer.classList.remove('hidden');
		msContainer.classList.remove('hidden');
		fsContainer.classList.remove('hidden');

		kmh.innerText = `${(input * 1.60934).toFixed(2)}`;
		knot.innerText = `${(input * 0.868976).toFixed(2)}`;
		ms.innerText = `${(input * 0.4470398751685504).toFixed(2)}`;
		fs.innerText = `${(input * 1.4666662571146666938).toFixed(2)}`;
	} else if (select === 'knot') {
		kmhContainer.classList.remove('hidden');
		mphContainer.classList.remove('hidden');
		knotContainer.classList.add('hidden');
		msContainer.classList.remove('hidden');
		fsContainer.classList.remove('hidden');

		kmh.innerText = `${(input * 1.852000157671843894).toFixed(2)}`;
		mph.innerText = `${(input * 1.1507795459963761076).toFixed(2)}`;
		ms.innerText = `${(input * 0.51444448824222).toFixed(2)}`;
		fs.innerText = `${(input * 1.68781).toFixed(2)}`;
	} else if (select === 'meters') {
		kmhContainer.classList.remove('hidden');
		mphContainer.classList.remove('hidden');
		knotContainer.classList.remove('hidden');
		msContainer.classList.add('hidden');
		fsContainer.classList.remove('hidden');

		kmh.innerText = `${(input * 3.6).toFixed(2)}`;
		mph.innerText = `${(input * 2.23694).toFixed(2)}`;
		knot.innerText = `${(input * 1.9438477170141).toFixed(2)}`;
		fs.innerText = `${(input * 3.2808453346456296629).toFixed(2)}`;
	} else if (select === 'feet') {
		kmhContainer.classList.remove('hidden');
		mphContainer.classList.remove('hidden');
		knotContainer.classList.remove('hidden');
		msContainer.classList.remove('hidden');
		fsContainer.classList.add('hidden');

		kmh.innerText = `${(input * 1.0972818192901392376).toFixed(2)}`;
		mph.innerText = `${(input * 0.68181931227271919127).toFixed(2)}`;
		knot.innerText = `${(input * 0.59248478414589766938).toFixed(2)}`;
		ms.innerText = `${(input * 0.30480050535839636749).toFixed(2)}`;
	}
}
