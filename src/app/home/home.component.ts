import { Component, OnInit } from '@angular/core';
import { Tasks } from '../tasks';
import { TaskService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  tasks: Tasks[];
  is_checked: boolean;

  constructor(private taskService: TaskService) { }

  getTasks(): void {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.getTasks();
  }

  isChecked() {
    this.is_checked = !this.is_checked;
  }

}
