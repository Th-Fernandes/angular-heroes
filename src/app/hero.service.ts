import { Injectable } from '@angular/core';
import { HEROES } from 'src/__test__/mock-heroes';
import { Hero } from 'src/interfaces/hero';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    // private http: HttpClient,
    private messageService: MessageService
  ) { }
  
  getHeroes(): Observable<Hero[]> {
    const observableHeroes = of(HEROES);
    this.messageService.add(`HeroesService: heroes successfully fetched`);
    return observableHeroes;
    // return this.http.get<Hero[]>('/src/__test__/mock-heroes');
  }

  getHeroById(id: number) {
    const observableHero = of(HEROES.find(h => h.id === id));
    this.messageService.add(`HeroesService: heroes successfully fetched by id [${id}]`);
    return observableHero;
  }

}
