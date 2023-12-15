import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSearchService } from 'src/app/core/services/user-search.service';

@Component({
  selector: 'app-search-jobs-input',
  templateUrl: './search-jobs-input.component.html',
})
export class SearchJobsInputComponent {
  constructor(private userSearch: UserSearchService, private router: Router) {}

  searchEntry = this.userSearch.searchEntry;

  onSubmitSearch(inputValue: string) {
    const isUserNotOnJobsPath = this.router.url !== '/jobs';
    const isSearchEntryNotEmpty = this.searchEntry.value?.length !== 0;

    if (isSearchEntryNotEmpty && isUserNotOnJobsPath)
      this.router.navigate(['/jobs']);

    this.searchEntry.setValue(inputValue)
  }
}
