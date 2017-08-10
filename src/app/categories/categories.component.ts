import { Component, OnInit } from '@angular/core';
import { TaskService } from '../app.service';
import { Task } from '../task';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  noDuplicateCategory = [];
  categories: Task[];
  error: any;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
  
  getTasks(): void {
    this.taskService
      .getTasks()
      .then(tasks => {
        this.categories = tasks;
        const category = [];

        tasks.forEach(function (eachObj) {
          category.push(eachObj.categoria);
        });

        this.noDuplicateCategory = Array.from(new Set(category));
      })
      .catch(error => this.error = error);
  }

  deleteCategory(task: Task, event: any): void {
    event.stopPropagation();
    this.taskService
      .delete(task)
      .then(res => {
        this.categories = this.categories.filter(h => h !== task);
      })
      .catch(error => this.error = error);
  }

  add(value): void {
    value = value.trim();

    if (this.noDuplicateCategory.indexOf(value) === -1) {
      if (value !== '') {
        this.noDuplicateCategory.push(value);
        // this.taskService.create(value)
        //   .then(category => {
        //     console.log(category);
        //     this.noDuplicateCategory.push(category);
        //   });
      }
    }
  }

}
