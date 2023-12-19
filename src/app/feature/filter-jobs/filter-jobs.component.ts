import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterJobsService } from 'src/app/core/services/filter-jobs.service';
import { Filters } from 'src/interfaces/filters';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
})
export class FilterJobsComponent {
  @Input() fetchedJobs!: (Hero | null)[];

  filtersInputs = this.formBuilder.group<Filters>({
    salaryRange: null,
    positionLevel: null,
    opportunityType: null,
  });

  constructor(
    private formBuilder: FormBuilder,
    private filterJobs: FilterJobsService
  ) {}

  onSubmit() {
    this.filterJobs.applyAllFilters(this.fetchedJobs, this.filtersInputs.value);
  }
}
