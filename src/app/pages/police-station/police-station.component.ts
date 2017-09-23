import { Component, OnInit } from '@angular/core';
import { PoliceStationsService } from '../../services/police-stations.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-police-station',
  templateUrl: './police-station.component.html',
  styleUrls: ['./police-station.component.css']
})
export class PoliceStationComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private appService: PoliceStationsService) {
  }

  ngOnInit() {
    this.appService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.data = data;
      });
  }

}
