import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../../services/schools.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private appService: SchoolsService) {
  }

  ngOnInit() {
    this.appService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.data = data;
      });
  }

}
