import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSearchService } from 'src/app/core/services/user-search.service';

@Component({
  selector: 'app-search-jobs-input',
  templateUrl: './search-jobs-input.component.html',
})
export class SearchJobsInputComponent implements OnInit {
  constructor(private userSearch: UserSearchService, private router: Router) {}

  searchInputControl = new FormControl<string>('');
  jobsRoute = '/jobs';

  ngOnInit(): void {
    this.userSearch.searchInputValue.subscribe((inputValue) => {
      console.log('lorem');
      this.searchInputControl.setValue(inputValue);
    });
  }

  onSubmitSearch() {
    this.makeInputValueAvailableToService();
    this.redirectWhenUserIsNotOnJobsPath();
  }

  private makeInputValueAvailableToService() {
    if (this.searchInputControl.value)
      this.userSearch.searchInputValue.next(this.searchInputControl.value);
  }

  private redirectWhenUserIsNotOnJobsPath() {
    const isUserNotOnJobsPath = this.router.url !== this.jobsRoute;
    if (isUserNotOnJobsPath) this.router.navigate([this.jobsRoute]);
  }
}
