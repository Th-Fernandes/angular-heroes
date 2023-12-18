import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserSearchService } from 'src/app/core/services/user-search.service';

@Component({
  selector: 'app-search-jobs-input',
  templateUrl: './search-jobs-input.component.html',
})
export class SearchJobsInputComponent implements OnInit, OnDestroy {
  constructor(private userSearch: UserSearchService, private router: Router) {}

  searchInputControl = new FormControl<string>('');
  jobsRoute = '/jobs';
  searchInputValueSubscription!: Subscription;

  ngOnInit(): void {
    this.searchInputValueSubscription =
      this.userSearch.searchInput$.subscribe((inputValue) => {
        this.searchInputControl.setValue(inputValue);
      });
  }

  ngOnDestroy(): void {
    this.searchInputValueSubscription.unsubscribe();
  }

  onSubmitSearch() {
    this.makeInputValueAvailableToService();
    this.redirectWhenUserIsNotOnJobsPath();
  }

  private makeInputValueAvailableToService() {
    if (this.searchInputControl.value)
      this.userSearch.searchInput$.next(this.searchInputControl.value);
  }

  private redirectWhenUserIsNotOnJobsPath() {
    const isUserNotOnJobsPath = this.router.url !== this.jobsRoute;
    if (isUserNotOnJobsPath) this.router.navigate([this.jobsRoute]);
  }
}
