Here's a `README.md` file for your to-do list project, describing the project, its features, how to run it, and additional information.

---

# To-Do List Application

## Project Overview

This is a simple, responsive **To-Do List Application** built using **HTML**, **CSS**, and **JavaScript**. The application allows users to create, edit, and delete tasks. The tasks are saved locally using the browser's `localStorage`, which means the task list will persist even after the browser is closed or the page is refreshed.

### Features:

1. **Add New Tasks**: Users can enter tasks into an input field and add them to the list by clicking the "Add" button.
2. **Mark Tasks as Completed**: Clicking on a task will toggle its status between "completed" (with a strikethrough) and "incomplete."
3. **Edit Tasks**: Each task has a pencil icon (✎) that allows the user to edit the task content.
4. **Delete Tasks**: Each task also has a delete button (×) that allows users to remove the task from the list.
5. **Local Storage Support**: All tasks are saved in the browser's `localStorage`, ensuring that the task list persists across page reloads and browser sessions.

## Demo

You can try the To-Do List Application by running it in a browser. Below is an example of how the application will look:

![To-Do List Screenshot](./images/todo_list.png)

## How to Run

1. **Download or clone the repository**:

    ```bash
    git clone https://github.com/yourusername/todo-list-app.git
    cd todo-list-app
    ```

2. **Open `index.html`**:
   - You can simply open the `index.html` file in any modern web browser.

3. **Add and manage tasks**:
   - Enter your task in the input field and click "Add" to create a task.
   - Click on a task to mark it as completed.
   - Use the pencil icon (✎) to edit a task.
   - Use the delete button (×) to remove tasks.

## Project Files

### 1. `index.html`
This file contains the structure of the to-do list, including:
   - An input field for adding tasks.
   - A button to add the task to the list.
   - An unordered list (`<ul>`) that displays the tasks.
   - Script reference for `script.js` and styles reference for `style.css`.

### 2. `style.css`
   - Handles the styling of the application.
   - Provides styling for the to-do list container, input field, buttons, and task elements (including hover effects and responsive design).
   - Includes styling for task states (checked/completed), the pencil icon for editing, and the delete button.

### 3. `script.js`
   - Implements the functionality of the to-do list application.
   - Defines functions for:
     - Adding new tasks to the list.
     - Marking tasks as completed.
     - Editing tasks by clicking the pencil icon.
     - Deleting tasks with the delete button.
     - Saving tasks to `localStorage` and retrieving them on page reload.

### 4. `images`
   - Contains icons (e.g., checked, unchecked) used for task states, and a screenshot for the `README.md` if necessary.

## How It Works

1. **Adding a Task**:
   - Users type a task into the input box and click "Add." A new task is appended to the list below.
   - Each task comes with a pencil icon for editing and a delete icon (×) for removal.

2. **Editing a Task**:
   - When the user clicks the pencil icon (✎), the task text turns into an input field, allowing for editing.
   - The user can either press `Enter` or click outside the input box to save the updated task.

3. **Deleting a Task**:
   - The delete button (×) next to each task removes it from the list immediately.

4. **Local Storage**:
   - Tasks are saved in the browser's `localStorage`, ensuring they persist after the page is reloaded or the browser is closed.
   - When the page is loaded, the application checks `localStorage` and restores the saved tasks.

## Technologies Used

- **HTML**: For the structure of the application.
- **CSS**: For styling and layout of the to-do list.
- **JavaScript**: For task functionality, handling user interactions, and managing local storage.

## Conclusion

This is a lightweight and fully functional To-Do List application built with plain HTML, CSS, and JavaScript. It serves as a practical project for learning the basics of DOM manipulation, event handling, and using `localStorage`. The project is beginner-friendly and can be easily extended with additional features.
