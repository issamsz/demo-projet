import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private todos: Todo[] = [];
  constructor() { }
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index,  1);
    }
  }

  logger(){
    console.log(this.todos);
  }
}



