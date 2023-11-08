import { Injectable } from '@angular/core';
import { HEROES } from 'src/__test__/mock-heroes';
import { Hero } from 'src/interfaces/hero';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const observableHeroes = of(HEROES);
    return observableHeroes;
    // return this.http.get<Hero[]>('/src/__test__/mock-heroes');
  }

  constructor(private http: HttpClient ) { }
}
