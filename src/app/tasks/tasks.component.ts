import { Component, OnInit } from '@angular/core';
import { TaskService } from '../app.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[];
  error: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService
      .getTasks()
      .then(tasks => {
        this.tasks = tasks;
      })
      .catch(error => this.error = error);
  }

  deleteTask(task: Task, event: any): void {
    event.stopPropagation();
    this.taskService
      .delete(task)
      .then(res => {
        this.tasks = this.tasks.filter(h => h !== task);
      })
      .catch(error => this.error = error);
  }
}
