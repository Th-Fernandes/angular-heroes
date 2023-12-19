import { Injectable } from '@angular/core';
import { Filters, SalaryRange } from 'src/interfaces/filters';
import { Hero } from 'src/interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class FilterJobsService {
  filteredJobs?: (Hero | null)[];

  constructor() {}

  // applyAllFilters(jobs: Hero[]) {
  //   const filters: ((job: Hero) => Hero[])[] = []

  //   for(let filter of filters) {
  //     jobs.map(job => filter(job))
  //   }
  // }

  filterBySalaryRange(job: Hero | null, conditionValue: SalaryRange | null | undefined) {
    if(!job || !conditionValue) return null
    console.log(conditionValue)

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
}
