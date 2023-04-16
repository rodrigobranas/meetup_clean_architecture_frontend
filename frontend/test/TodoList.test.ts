import TodoList from "../src/entities/TodoList";

test("Deve criar uma todo list", function () {
	const todoList = new TodoList();
	todoList.addTodo("A", true);
	const b = todoList.addTodo("B");
	todoList.addTodo("C");
	expect(todoList.getTotal()).toBe(3);
	expect(todoList.getProgress()).toBe(33);
	b.toggleDone();
	expect(todoList.getProgress()).toBe(67);
});