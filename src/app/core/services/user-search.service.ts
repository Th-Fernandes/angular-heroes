import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Hero } from 'src/interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class UserSearchService {
  constructor(private http: HttpClient) {}

  availableJobs = new Subject<Hero[]>();
  searchInputValue = new BehaviorSubject<string>('');

  registerAvailableJobs() {
    this.getJobs().subscribe(res => {
      this.availableJobs.next(res)
    })
  }
  
  getJobs() {
    return this.http.get<Hero[]>('api/heroes')
  }
}
