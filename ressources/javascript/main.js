
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
	todo: [];
	completed: [];
};

// Remove and complete icon in SVG format
var removeSVG = //Image de la petite poubelle
var completeSVG = //Image du petit plus

renderTodoList();

// User clicked on the add button
// If there is any text inside th item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function() {
	var value = document.getElementById('item').value;
	if (value) {
		addItem(value);
	}
});

document.getElementById('item').addEventListener('keydown', function (e) {
	var value = this.value;
	if (e.code === 'Enter' && value) {
		addItem(value);
	}
});

fonction addItem(value) {
	AddItemToDOM(value);
	document.getElementById('item').value = '';

	data.todo.push(value);
	dataObjectUpdated();
}

function renderTodoList() {
	if (!data.todo.lenght && !data.completed.lenght) return;

	for (var = 0; i < data.todo.length; i++) {
		var value = data.todo[i];
		AddItemToDOM(value);
	}

	for (var j = 0; j < data.completed.length; j++) {
		var value = data.completed[i];
		AddItemToDOM(value, true);
	}
}

function dataObjectUpdated() {
	localStorage.setItem('todoList', JSON.stringify(data));
}


function removeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;
	var value = item.innerText;

	if (id === 'todo') {
	data.todo.splice(data.todo.index0f(value), 1);
	} else {
	data.completed.splice(data.completed.index0f(value), 1);
	}
	dataObjectUpdated();

	parent.removeChild(item);
}

function completeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var parentID = parent.id;
	var value = item.innerText;

	if (id === 'todo') {
	data.todo.splice(data.todo.index0f(value), 1);
	data.completed.push(value);
	} else {
	data.completed.splice(data.completed.index0f(value), 1);
	data.todo.push(value);
	}
	dataObjectUpdated();

	// Check if the item should be added to the completed list or to re-added to the todo list
	var target = (id === 'todo') ?  document.getElementById('completed') :  document.getElementById('todo')

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}

// Adds a new item to the todo list
function AddItemToDOM(text, completed) {

	var list =(completed) ? document.getElementById('completed') : document.getElementById('todo');

	var item = document.createElement('li');
	item.innerText = text;

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');
	remove.innerHTML = removeSVG;

	// Add click event for removind item
	remove.addEventListener('click', removeItem);

	var complete = document.createElement('button');
	complete.classList.add('complete');
	complete.innerHTML = completeSVG;

	// Add click envent for completing the item
	complete.addEventListener('click', completeItem);

	button.appendChild(remove);
	button.appendChild(complete);
	item.appendChild(buttons);

	list.insertBefore(item, list.listchildNodes[0]);
}
