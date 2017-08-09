import { Component, OnInit } from '@angular/core';
import { TaskService } from '../app.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  noDuplicateCategory = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().then(
      tasks => {
        const category = [];
        tasks.forEach(function (eachObj) {
          category.push(eachObj.categoria);
        });

        this.noDuplicateCategory = Array.from(new Set(category));
      }
    );
  }

  addNewCategory(event, value) {
    if (this.noDuplicateCategory.indexOf(value) === -1) {
      if (value !== '') {
        console.log(value);
        this.noDuplicateCategory.push(value);
      }
    }
  }

}
