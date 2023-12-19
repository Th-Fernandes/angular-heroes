import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Hero } from 'src/interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class UserSearchService {
  searchInput$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  getAllJobs(): Observable<Hero[]> {
    return this.http.get<Hero[]>('api/heroes');
  }

  getJobsBySearchInputValue() {
    return this.getAllJobs().pipe(
      map((jobs) => {
        const standardizedJobs = this.standardizeJobsProperties(jobs);
        return standardizedJobs.map((job) =>
          this.findJobByQuery(job) ? job : null
        );
      })
    );
  }

  private standardizeJobsProperties(jobs: Hero[]) {
    const standards = [
      this.toggleJobPropertiesCase,
      this.setJobPropertiesAccentsInsensitive.bind(this),
    ];
    let standardizedJobs: Hero[] = jobs;

    for (let standard of standards)
      standardizedJobs.map((job) => standard(job));

    return standardizedJobs;
  }
  
  private findJobByQuery(job: Hero) {
    const standardizedJobInputValue = this.standardizeInputValue();

    const conditions = [
      job.company.includes(standardizedJobInputValue),
      job.position.includes(standardizedJobInputValue),
      job.salary === Number(standardizedJobInputValue),
    ];

    return conditions.includes(true);
  }

  private toggleJobPropertiesCase(job: Hero) {
    job.position = job.position.toLowerCase();
    job.company = job.company.toLowerCase();
    
    return job;
  }

  private setJobPropertiesAccentsInsensitive(job: Hero) {
    job.position = this.removeAccents(job.position);
    job.company = this.removeAccents(job.company);

    return job;
  }


  private standardizeInputValue() {
    return this.removeAccents(this.searchInput$.value.trim().toLowerCase());
  }

  private removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
