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
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private heroesUrl = 'api/heroes';
  
  getHeroes(): Observable<Hero[]> {
    // return of(HEROES)
    // this.messageService.add(`HeroesService: heroes successfully fetched`);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHeroById(id: number) {
    const observableHero = of(HEROES.find(h => h.id === id));
    this.messageService.add(`HeroesService: heroes successfully fetched by id [${id}]`);
    return observableHero;
  }

}
