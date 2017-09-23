import { Component, OnInit } from '@angular/core';
import { FirefightersService } from '../../services/firefighters.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-firefighter',
  templateUrl: './firefighter.component.html',
  styleUrls: ['./firefighter.component.css']
})

export class FirefighterComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private appService: FirefightersService) {
  }

  ngOnInit() {
    this.appService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.data = data;
      });
  }

}

