import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TodosGatewayHttp from './gateways/TodosGatewayHttp';

const app = createApp(App);
const todosGateway = new TodosGatewayHttp();
app.provide("todosGateway", todosGateway);
app.mount('#app');