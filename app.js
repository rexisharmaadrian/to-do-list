// app.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.todo-form');
    const input = document.querySelector('#todo-input');
    const todoList = document.querySelector('.todo-list');

    form.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const taskText = input.value.trim();

        if (taskText) {
            addTask(taskText);
            input.value = ''; // Clear the input field after adding the task
        }
    }

    function addTask(text) {
        // Create a new todo item container
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // Create and add text element to the todo item
        const todoText = document.createElement('span');
        todoText.classList.add('todo-text');
        todoText.textContent = text;

        // Create and add delete button to the todo item
        const deleteButton = createDeleteButton();

        // Append text and button to the todo item
        todoItem.append(todoText, deleteButton);

        // Append the todo item to the todo list
        todoList.appendChild(todoItem);
    }

    function createDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // FontAwesome trash icon

        deleteButton.addEventListener('click', () => {
            deleteButton.parentElement.remove(); // Remove the todo item when the delete button is clicked
        });

        return deleteButton;
    }
});
