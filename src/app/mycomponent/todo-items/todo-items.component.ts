import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todos } from '../../Todos';
 
@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {

   @Input()  todo: Todos = new Todos;
   @Output() todoDelete: EventEmitter<Todos> =new EventEmitter(); 
   constructor(){ } 

   onClick(){
     this.todoDelete.emit(this.todo);
    console.log("Delete onclick has been triggered");
   }
}
