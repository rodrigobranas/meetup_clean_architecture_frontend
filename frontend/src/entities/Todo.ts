export default class Todo {
	constructor (readonly description: string, public done: boolean = false) {
	}

	toggleDone () {
		this.done = !this.done;
	}
}
