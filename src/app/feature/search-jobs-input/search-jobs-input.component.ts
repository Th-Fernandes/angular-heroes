import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserSearchService } from 'src/app/core/services/user-search.service';

@Component({
  selector: 'app-search-jobs-input',
  templateUrl: './search-jobs-input.component.html',
})
export class SearchJobsInputComponent {
  constructor(private userSearch: UserSearchService, private router: Router) {}

  searchEntry = this.userSearch.searchEntry;

  onSubmitSearch(inputValue: string) {
    this.userSearch.registerAvailableJobs();
    const isUserNotOnJobsPath = this.router.url !== '/jobs';

    if (isUserNotOnJobsPath) this.router.navigate(['/jobs']);
  }
}
