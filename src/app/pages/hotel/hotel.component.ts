import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private appService: HotelService) {
  }

  ngOnInit() {
    this.appService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.data = data;
      });
  }

}
