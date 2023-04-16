import { mount } from "@vue/test-utils";
import AppVue from "../src/App.vue";
import Todo from "../src/entities/Todo";
import TodosGateway from "../src/gateways/TodosGateway";
import TodosGatewayHttp from "../src/gateways/TodosGatewayHttp";

function sleep (time: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
}

test("Deve criar uma todo list", async function () {
	const todosGateway: TodosGateway = {
		async getTodos (): Promise<Todo[]> {
			return [
				new Todo("A", true),
				new Todo("B"),
				new Todo("C")
			]
		}
	}
	const wrapper = mount(AppVue, {
		global: {
			provide: {
				todosGateway
			}
		}
	});
	await sleep(200);
	expect(wrapper.get(".total").text()).toBe("3");
	expect(wrapper.findAll(".todo-description")?.at(0)?.text()).toBe("A");
	expect(wrapper.findAll(".todo-description")?.at(1)?.text()).toBe("B");
	expect(wrapper.findAll(".todo-description")?.at(2)?.text()).toBe("C");
	expect(wrapper.get(".progress").text()).toBe("33%");
	await wrapper.findAll(".todo-toggle-done-button")?.at(1)?.trigger("click");
	expect(wrapper.get(".progress").text()).toBe("67%");
	await wrapper.get(".description").setValue("D");
	await wrapper.get(".description").trigger("keyup.enter");
	expect(wrapper.get(".total").text()).toBe("4");
	expect(wrapper.get(".progress").text()).toBe("50%");
});
