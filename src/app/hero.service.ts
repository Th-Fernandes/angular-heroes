import { Injectable } from '@angular/core';
import { Hero } from 'src/interfaces/hero';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
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
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(() => this.messageService.add('HeroesService: fetched heroes')),
        catchError(this.handleError<Hero[]>('get heroes', []))
      );
  }
  
  getHeroById(id: number) {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap(() => this.messageService.add(`HeroesService: fetched hero [${id}]`)),
        catchError(this.handleError<Hero>(`get hero [${id}]`)),
      );
  }

  handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.messageService.add(`HeroesService: failed to ${operation}`)
      return of(result as T);
    };
  }
}
