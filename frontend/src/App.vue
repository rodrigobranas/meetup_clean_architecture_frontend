<script setup lang="ts">
	import { inject, onMounted, Ref, ref } from 'vue';
	import axios from "axios";
	import TodoList from './entities/TodoList';
import TodosGateway from './gateways/TodosGateway';

	const todoList: Ref<TodoList> = ref(new TodoList());
	const description = ref("");

	onMounted(async () => {
		const todosGateway = inject("todosGateway") as TodosGateway;
		const todos = await todosGateway.getTodos();
		todoList.value.todos.push(...todos);
	})
</script>

<template>
	<span class="total">{{ todoList.getTotal() }}</span><br/>
	<span class="progress">{{ todoList.getProgress() }}%</span><br/>
	<div v-for="todo in todoList.todos">
		<span class="todo-description" :class="{ done: todo.done }">{{ todo.description }}</span>
		<button class="todo-toggle-done-button" @click="todo.toggleDone()">done/undone</button>
	</div>
	<input class="description" v-model="description" @keyup.enter="todoList.addTodo(description)"/>
</template>

<style scoped>
	.done {
		text-decoration: line-through;
	}
</style>
