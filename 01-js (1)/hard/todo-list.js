/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
	constructor() {
		this.todos = [];
	}

	add(task) {
		this.todos.push(task);
	}

	remove(i) {
		this.todos.splice(i, 1);
	}

	update(i, updatedTask) {
		if (i >= this.todos.length) {
			return;
		}
		this.todos[i] = updatedTask;
	}

	getAll() {
		return this.todos;
	}

	get(i) {
		if (i >= this.todos.length) {
			return null;
		}
		return this.todos[i];
	}

	clear() {
		this.todos = [];
	}
}

module.exports = Todo;
