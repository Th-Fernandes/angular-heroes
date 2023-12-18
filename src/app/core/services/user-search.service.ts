import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, filter, map } from 'rxjs';
import { Hero } from 'src/interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class UserSearchService {
  constructor(private http: HttpClient) {}

  availableJobs = new Subject<Hero[]>();
  searchInputValue = new BehaviorSubject<string>('');

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
      map((heroes) =>
        heroes.map((hero) => {
          const conditions = [
            hero.company.includes(this.searchInputValue.value),
            hero.position.includes(this.searchInputValue.value),
            hero.salary === Number(this.searchInputValue.value),
          ];

          console.log(conditions)
          if (conditions.includes(true)) return hero;
          return null
        })
      )
    );
  }
}
