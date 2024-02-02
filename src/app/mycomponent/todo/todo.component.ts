import { Component } from '@angular/core';
import { Todos } from '../../Todos'; 
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

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

}
