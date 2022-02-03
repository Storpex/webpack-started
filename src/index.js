import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

const tarea = new Todo('Aoeu');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea)