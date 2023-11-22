import { Injectable } from '@angular/core';
import { Hero } from 'src/interfaces/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  private heroesUrl = 'api/heroes';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  
  
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap({
          complete: () => this.logServiceAction('fetched heroes')
        }),
        catchError(this.handleError<Hero[]>('get heroes', []))
      )
  }
  
  getHeroById(id: number) {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
        tap(() => this.logServiceAction(`fetched hero [${id}]`)),
        catchError(this.handleError<Hero>(`get hero [${id}]`)),
      );
  }

  updateHero(hero: Hero) {
    return this.http.put(this.heroesUrl, hero, this.httpOptions)
      .pipe(
        tap(() => this.logServiceAction(`updated hero [${hero.id}]`)),
        catchError(this.handleError<any>('updateHero'))
      );
  }

  addHero(hero: Hero) {
    return this.http.post(this.heroesUrl, hero)
      .pipe(
        tap((newHero: any) => this.logServiceAction(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<any>('postedHero'))
      );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.logServiceAction(`failed to ${operation}`);
      return of(result as T);
    }
  }

  private logServiceAction(message: string) {
    this.messageService.add(`heroService: ${message}`)
  }
}
