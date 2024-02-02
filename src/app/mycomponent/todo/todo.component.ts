import { Component } from '@angular/core';
import { Todos } from '../../Todos'; 
import { NgFor } from '@angular/common';
import { TodoItemsComponent } from "../todo-items/todo-items.component"; 

@Component({
    selector: 'app-todo',
    standalone: true,
    templateUrl: './todo.component.html',
    styleUrl: './todo.component.css',
    imports: [NgFor, TodoItemsComponent]
})
export class TodoComponent {
[x: string]: any;
$events: any;
todoDelete(arg0: any) {
throw new Error('Method not implemented.');
}

  todos: Todos[];
  constructor(){
    this.todos= [
    {
      sno:1,
      title:"first",
      desc: "this is my first todo",
      active: true
    },
    {
      sno:2,
      title:"second",
      desc: "this is my first todo",
      active: true
    },

    {
      sno:3,
      title:"thirds",
      desc: "this is my first todo",
      active: false    
    }


  ]
  }

    deleteTodo(todo: Todos){
      console.log(todo);
      const index=this.todos.indexOf(todo);
      console.log("Index is :"+index);
      this.todos.splice(index,1);

    }

}
