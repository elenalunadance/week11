const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function createTask() {
    const taskText = taskInput.value;
    
    const newTask = document.createElement('li');

    newTask.textContent = taskText;

    taskList.append(newTask);

    taskInput.value = '';
}

function checkTask(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('completed');
	}
}

addButton.addEventListener('click', createTask);

taskList.addEventListener('click', checkTask);