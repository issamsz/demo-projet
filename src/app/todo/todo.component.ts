import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo = new Todo();
  todos: Todo[];

  displayedColumns: string[] = ['name', 'content', 'phone'];



  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(){
    if (this.todos.length) {this.todo.int = this.todos[this.todos.length - 1].int + 1;
    } else {
      this.todo.int = 1
    }

    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo);
  }

}
