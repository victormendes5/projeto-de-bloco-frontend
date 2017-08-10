import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../app.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})

export class Home2Component implements OnInit {

  tasks: Task[];
  is_checked: boolean;

  constructor(private taskService: TaskService) { }

  getTasks(): void {
    this.taskService
      .getTasks()
      .then(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.getTasks();
  }

  isChecked() {
    this.is_checked = !this.is_checked;
  }

}
