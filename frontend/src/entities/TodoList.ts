import Todo from "./Todo";

export default class TodoList {
	todos: Todo[];

	constructor () {
		this.todos = [];
	}

	addTodo (description: string, done: boolean = false) {
		const newTodo = new Todo(description, done)
		this.todos.push(newTodo);
		return newTodo;
	}

	getTotal () {
		return this.todos.length;
	}

	getProgress () {
		const done = this.todos.filter((todo: any) => todo.done);
		return Math.round(done.length/this.todos.length * 100);
	}
}
