import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Filters, SalaryRange } from 'src/interfaces/filters';
import { Hero } from 'src/interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class FilterJobsService {
  filteredJobs = new Subject<(Hero|null)[]>();

  constructor() {}

  applyAllFilters(jobs: (Hero | null)[], selectedOptions: Partial<Filters>) {
    const filters = [
      {
        applyFilter: this.filterBySalaryRange,
        selectedOption: selectedOptions.salaryRange
      },
    ]
    let filteredJobs: ( Hero | null)[] = []

    for(let {applyFilter, selectedOption} of filters) {
      filteredJobs = jobs.filter(job => applyFilter(job, selectedOption))
    }
    this.filteredJobs.next(filteredJobs)
  }

  filterBySalaryRange(job: Hero | null, conditionValue: SalaryRange | null | undefined) {
    if(!job || !conditionValue) return null

    const conditions = {
      0: job.salary >= 1000 && job.salary <= 2500,
      1: job.salary >= 2500 && job.salary <= 4000,
      2: job.salary >= 4000 && job.salary <= 6000,
      3: job.salary >= 6000 && job.salary <= 10000,
      4: job.salary > 10000,
    };
    const doesJobMatchesCondition =  conditions[conditionValue];

    return doesJobMatchesCondition ? job : null;
  }

  filterByPositionLevel() {

  }
}
