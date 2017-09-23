import { Component, OnInit } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private appService: AttractionsService) {
  }

  ngOnInit() {
    this.appService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.data = data;
      });
  }

}
