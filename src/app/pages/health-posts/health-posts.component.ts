import { Component, OnInit } from '@angular/core';
import { HealthPostsService } from '../../services/health-posts.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-health-posts',
  templateUrl: './health-posts.component.html',
  styleUrls: ['./health-posts.component.css']
})
export class HealthPostsComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private appService: HealthPostsService) {
  }

  ngOnInit() {
    this.appService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.data = data;
      });
  }

}
