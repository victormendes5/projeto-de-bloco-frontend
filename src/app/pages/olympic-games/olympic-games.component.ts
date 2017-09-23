import { Component, OnInit } from '@angular/core';
import { OlympicGamesService } from '../../services/olympic-games.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-olympic-games',
  templateUrl: './olympic-games.component.html',
  styleUrls: ['./olympic-games.component.css']
})
export class OlympicGamesComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private appService: OlympicGamesService) {
  }

  ngOnInit() {
    this.appService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.data = data;
      });
  }

}
