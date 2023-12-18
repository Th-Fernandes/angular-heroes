import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Hero } from 'src/interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class UserSearchService {
  constructor(private http: HttpClient) {}

  availableJobs = new Subject<Hero[]>();
  searchInputValue = new BehaviorSubject<string>('');
  private jobFieldsToBeModified: (keyof Hero)[] = ['position', 'company'];

  registerAvailableJobs() {
    this.getAllJobs().subscribe((res) => {
      this.availableJobs.next(res);
    });
  }

  getAllJobs(): Observable<Hero[]> {
    return this.http.get<Hero[]>('api/heroes');
  }

  getJobsBySearchInputValue() {
    return this.getAllJobs().pipe(
      map((jobs) => {
        const caseChangedJob = jobs.map((job) =>
          this.toggleJobPropertiesCase(job)
        );
        return caseChangedJob.map((job) =>
          this.findJobByQuery(job) ? job : null
        );
      })
    );
  }


  private toggleJobPropertiesCase(job: Hero) {
    for (let jobFieldToBeModified of this.jobFieldsToBeModified)
    // @ts-ignore
      job[jobFieldToBeModified] = job[jobFieldToBeModified]
        .toString().toLowerCase();

    return job;
  }

  private findJobByQuery(job: Hero) {
    const lowerCaseInputValue = this.validateInputValue();

    const conditions = [
      job.company.includes(lowerCaseInputValue),
      job.position.includes(lowerCaseInputValue),
      job.salary === Number(lowerCaseInputValue),
    ];

    return conditions.includes(true);
  }

  private validateInputValue() {
    return this.searchInputValue.value
      .trim()
      .toLowerCase()
  }
}
