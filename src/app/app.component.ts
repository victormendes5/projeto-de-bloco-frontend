import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  category = '+ Categoria';
  tasks = '+ Tarefa';
  seeTaskByCategory = 'Ver tarefas por categoria';
  seeTaskByUniqueList = 'Ver tarefas por lista única';
}
