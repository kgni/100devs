// Take input and insert it into DOM

// const list = [];

const inputBtn = document.querySelector('.input-btn');
const ul = document.querySelector('ul');

const deleteBtns = document.querySelectorAll('.delete-btn');

inputBtn.addEventListener('click', addTodoItem);

function addTodoItem() {
	const input = document.querySelector('input');
	if (input.value === '') {
		return;
	} else {
		// Creating LI and appending to UL
		let li = document.createElement('li');
		li.innerText = input.value;
		// list.push(li);
		// const listItemIndex = `index${list.length - 1}`;
		// li.classList.add(listItemIndex);
		ul.appendChild(li);

		// Creating buttons and appending it to li
		let buttons = document.createElement('div');
		buttons.classList.add('buttons');

		li.appendChild(buttons);

		// Creating buttons and appending them to the buttons div

		// Edit Button:
		let editBtn = document.createElement('i');
		editBtn.classList.add('fa-solid', 'fa-pen-to-square', 'edit-btn');
		buttons.appendChild(editBtn);

		// Delete Button:

		let deleteBtn = document.createElement('i');
		deleteBtn.classList.add('fa-solid', 'fa-x', 'delete-btn');
		deleteBtn.addEventListener('click', deleteTodoItem);
		buttons.appendChild(deleteBtn);

		// console.log(
		// 	`Added ${input.value} to the list. This is the ${list.length} item`
		// );
		input.value = '';
	}
}

function deleteTodoItem(e) {
	// const li = e.target.parentElement.parentElement;
	// console.log(li);
	e.target.parentElement.parentElement.remove();
}

// TODO - add it all to local storage
