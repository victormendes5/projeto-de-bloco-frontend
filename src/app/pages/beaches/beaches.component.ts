import { Component, OnInit } from '@angular/core';
import { BeachesService } from '../../services/beaches.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-beaches',
  templateUrl: './beaches.component.html',
  styleUrls: ['./beaches.component.css']
})

export class BeachesComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private appService: BeachesService) {
  }

  ngOnInit() {
    this.appService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        data.forEach((entry) => {
          if (entry !== null) {
            this.data.push(entry);
          }
        });
      });
  }

}
