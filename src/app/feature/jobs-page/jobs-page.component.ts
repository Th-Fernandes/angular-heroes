import { Component, OnInit } from '@angular/core';
import { UserSearchService } from 'src/app/core/services/user-search.service';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
})
export class JobsPageComponent implements OnInit {
  constructor(private userSearch: UserSearchService) {}

  jobs: Hero[] = [];

  ngOnInit() {
    if (this.jobs.length == 0) this.getAllJobs();
    this.getJobsByUserSearchEntry();
  }

  getAllJobs() {
    this.userSearch.getJobs().subscribe((jobs) => (this.jobs = jobs));
  }

  getJobsByUserSearchEntry() {
    this.userSearch.availableJobs.subscribe((values) => (this.jobs = values));
  }
}
