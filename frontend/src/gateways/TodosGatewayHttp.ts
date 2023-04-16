import axios from "axios";
import Todo from "../entities/Todo";
import TodosGateway from "./TodosGateway";

export default class TodosGatewayHttp implements TodosGateway {

	async getTodos(): Promise<Todo[]> {
		const todos: Todo[] = [];
		const response = await axios.get("http://localhost:3000/todos");
		for (const todo of response.data) {
			todos.push(new Todo(todo.description, todo.done));
		}
		return todos;
	}

}