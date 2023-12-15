import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Hero } from 'src/interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class UserSearchService {
  constructor(private http: HttpClient) {}
  searchEntry = new Subject<Hero[]>();

  registerUserInput() {
    this.getJobs().subscribe(res => {
      this.searchEntry.next(res)
    })
  }
  
  getJobs() {
    return this.http.get<Hero[]>('api/heroes')
  }
}
