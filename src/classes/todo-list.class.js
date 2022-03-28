import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }
    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardadLocalStorage();
    }

    eliminarTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardadLocalStorage();

    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardadLocalStorage();
                break;
            }

        }

    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardadLocalStorage();


    }

    guardadLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));

    }

    cargarLocalStorage() {

        // if (localStorage.getItem('todos')) {
        //     this.todos = JSON.parse(localStorage.getItem('todos'));
        //     console.log(this.todos);
        //     console.log(typeof this.todos, 'PAstor');

        // } else {
        //     this.todos = [];
        // }
        this.todos = (localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];
        this.todos = this.todos.map(Todo.fromJSON);
    }
}