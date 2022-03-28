import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';
import './styles.css';



export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml);

const newTodo = new Todo('Aprendeer JavaScript');

todoList.todos[0].imprimirClase();
console.log(todoList.todos);

// localStorage.setItem('mi-key', 'ABC1234');
// sessionStorage.setItem('mi-key', 'ABC1234');