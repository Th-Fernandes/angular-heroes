import { Component, OnInit } from '@angular/core';
import { UserSearchService } from 'src/app/core/services/user-search.service';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
})
export class JobsPageComponent implements OnInit {
  constructor(private userSearch: UserSearchService) {}

  jobs: (Hero | null)[] = [];

  ngOnInit() {
    this.userSearch.searchInputValue.subscribe(() =>
      this.getJobsDependingOnSearchInputValue()
    );
  }

  private getJobsDependingOnSearchInputValue() {
    if (this.userSearch.searchInputValue.value.length == 0) {
      this.getAllJobs();
    } else {
      this.getJobsBySearchInputValue();
    }
  }
  private getAllJobs() {
    this.userSearch.getAllJobs().subscribe((jobs) => (this.jobs = jobs));
  }

  private getJobsBySearchInputValue() {
    this.userSearch
      .getJobsBySearchInputValue()
      .subscribe((jobs) => (this.jobs = jobs));
  }
}
