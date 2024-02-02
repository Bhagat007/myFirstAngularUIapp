import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./mycomponent/todo/todo.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TodoComponent]
})
export class AppComponent {
  title = 'my-first-project';
  constructor(){
    //this fn will change title after 3 sec and will reflect {{tittle}} in src\app\app.component.html
  //   setTimeout(()=>{                    
  //     this.title = 'change to this';
  // }, 3000);
  }
}
