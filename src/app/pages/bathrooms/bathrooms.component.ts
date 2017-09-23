import { Component, OnInit } from '@angular/core';
import { BathroomsService } from '../../services/bathrooms.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-bathrooms',
  templateUrl: './bathrooms.component.html',
  styleUrls: ['./bathrooms.component.css']
})
export class BathroomsComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private appService: BathroomsService) {
  }

  ngOnInit() {
    this.appService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.data = data;
      });
  }

}
