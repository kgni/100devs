let total = 0;
let result = document.querySelector('.result');
document.querySelector('.reset').addEventListener('click', reset);

// Selecting plus buttons and adding eventlistner on click, which will fire a function adding the number displayed on the button to the total. The new total will then be inserted as innerText to the result element.
document.querySelector('.plus1').addEventListener('click', plus1);
document.querySelector('.plus3').addEventListener('click', plus3);
document.querySelector('.plus6').addEventListener('click', plus6);
document.querySelector('.plus9').addEventListener('click', plus9);
document.querySelector('.plus12').addEventListener('click', plus12);
document.querySelector('.plus15').addEventListener('click', plus15);
document.querySelector('.plus18').addEventListener('click', plus18);
document.querySelector('.plus21').addEventListener('click', plus21);

// Selecting minus buttons and doing the same as mentioned above, but with subtraction

document.querySelector('.minus1').addEventListener('click', minus1);
document.querySelector('.minus3').addEventListener('click', minus3);
document.querySelector('.minus6').addEventListener('click', minus6);
document.querySelector('.minus9').addEventListener('click', minus9);
document.querySelector('.minus12').addEventListener('click', minus12);
document.querySelector('.minus15').addEventListener('click', minus15);
document.querySelector('.minus18').addEventListener('click', minus18);
document.querySelector('.minus21').addEventListener('click', minus21);

// Selecting the last special row with multiplication, division, mod and power

document.querySelector('.multi2').addEventListener('click', multi2);
document.querySelector('.divide2').addEventListener('click', divide2);
document.querySelector('.mod2').addEventListener('click', mod2);
document.querySelector('.express').addEventListener('click', express);

function multi2() {
	total = total * 2;
	result.innerText = total;
}
function divide2() {
	total = total / 2;
	result.innerText = total;
}

function mod2() {
	total = total % 2;
	result.innerText = total;
}

function express() {
	total = total * total;
	result.innerText = total;
}

// Just resetting the total to 0, and inserting that to the result element.
function reset() {
	total = 0;
	result.innerText = total;
}

function plus1() {
	total++;
	result.innerText = total;
}
function plus3() {
	total = total + 3;
	result.innerText = total;
}
function plus6() {
	total = total + 6;
	result.innerText = total;
}
function plus9() {
	total = total + 9;
	result.innerText = total;
}
function plus12() {
	total = total + 12;
	result.innerText = total;
}
function plus15() {
	total = total + 15;
	result.innerText = total;
}
function plus18() {
	total = total + 18;
	result.innerText = total;
}
function plus21() {
	total = total + 21;
	result.innerText = total;
}
function minus1() {
	total--;
	result.innerText = total;
}
function minus3() {
	total = total - 3;
	result.innerText = total;
}
function minus6() {
	total = total - 6;
	result.innerText = total;
}
function minus9() {
	total = total - 9;
	result.innerText = total;
}
function minus12() {
	total = total - 12;
	result.innerText = total;
}
function minus15() {
	total = total - 15;
	result.innerText = total;
}
function minus18() {
	total = total - 18;
	result.innerText = total;
}
function minus21() {
	total = total - 21;
	result.innerText = total;
}
