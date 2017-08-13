import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories = ['Casa', 'Trabalho', 'Faculdade'];

  constructor() { }

  ngOnInit(): void {
    this.categories;
  }

  add(event, value) {
    if (this.categories.indexOf(value) === -1) {
      if (value !== '') {
        console.log(value);
        this.categories.push(value);
      }
    }
  }

}
