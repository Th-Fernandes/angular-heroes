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
    this.getJobsByUserSearchEntry();
  }

  getJobsByUserSearchEntry() {
    this.userSearch.searchEntry.subscribe((values) => (this.jobs = values));
  }
}
