import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Hero } from 'src/interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class UserSearchService {
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  searchEntry = this.formBuilder.control('');
  searchEntry2 = new Subject<Hero[]>();

  whenSearchEntryChanges(): Observable<string | null> {
    return this.searchEntry.valueChanges;
  }

  getJobs() {
    this.http.get<Hero[]>('api/heroes').subscribe(res => {
      this.searchEntry2.next(res);
    })
  }
}
