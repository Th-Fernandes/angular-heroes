import { Component, OnInit } from '@angular/core';
import { FilterJobsService } from 'src/app/core/services/filter-jobs.service';
import { UserSearchService } from 'src/app/core/services/user-search.service';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
})
export class JobsPageComponent implements OnInit {
  jobs: (Hero | null)[] = [];
  filteredJobs: (Hero | null)[] | null = null
  constructor(
    private userSearch: UserSearchService,
    private filterJobs: FilterJobsService
  ) {}

  ngOnInit() {
    this.getFilteredJobs();

    this.userSearch.searchInput$.subscribe(() =>
      this.getJobsDependingOnSearchInputValue()
    );
  }

  getFilteredJobs() {
    return this.filterJobs.filteredJobs.subscribe(filteredJobs => {
      this.filteredJobs = filteredJobs
    })
  }

  private getJobsDependingOnSearchInputValue() {
    if (this.userSearch.searchInput$.value.length == 0) {
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
