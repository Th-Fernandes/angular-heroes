import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserSearchService } from 'src/app/core/services/user-search.service';

@Component({
  selector: 'app-search-jobs-input',
  templateUrl: './search-jobs-input.component.html',
})
export class SearchJobsInputComponent implements OnInit {
  constructor(private userSearch: UserSearchService, private router: Router) {}

  searchInput = new FormControl<string>('');

  ngOnInit(): void {
    this.userSearch.searchInputValue.subscribe((inputValue) => {
      console.log(inputValue)
      this.searchInput.setValue(inputValue);
    });
  }

  onSubmitSearch() {
    this.userSearch.registerAvailableJobs();

    if (this.searchInput.value) {
      this.userSearch.searchInputValue.next(this.searchInput.value);
    }

    const isUserNotOnJobsPath = this.router.url !== '/jobs';

    if (isUserNotOnJobsPath) this.router.navigate(['/jobs']);
  }
}
