var todoe = new Vue({
			el: "#a",
			data: {
				message: "",
				todos: []
			},
			methods: {
				Add: function () {
					this.todos = [...this.todos, { text: this.message, done: false }];
					this.message = "";
					this.id = this.id + 1;
				},
				Delete: function (id) {
					this.todos.splice(this.todos.indexOf(id), 1);
				},
				Strike: function (todo) {
					todo.done = !todo.done;
				}
			}
		});