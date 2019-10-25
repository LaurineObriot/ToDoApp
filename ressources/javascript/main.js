
var data = {
	todo: [];
	completed: [];
};

// Remove and complete icon in SVG format
var removeSVG = //Image de la petite poubelle
var completeSVG = //Image du petit plus

// User clicked on the add button
// If there is any text inside th item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function() {
	var value = document.getElementById('item').value;
	if (value) {
		addItemTodo(value);
		document.getElementById('item').value = '';

		data.todo.push(value);
	}
});

function removeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);
}

function completeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var parentID = parent.id;
	var value = item.innerText

	data.todo.splice(data.todo.index0f(item.innerText))

	// Check if the item should be added to the completed list or to re-added to the todo list
	var target = (id === 'todo') ?  document.getElementById('completed') :  document.getElementById('todo')

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}

// Adds a new item to the todo list
function addItemTodo(item) {

	var list = document.getElementById('todo');

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
