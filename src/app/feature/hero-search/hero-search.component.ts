import { Component, OnInit } from '@angular/core';
import { Observable, Subject, concatMap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HeroService } from 'src/app/core/services/hero.service';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
})
export class HeroSearchComponent implements OnInit {
  public heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      switchMap((term: string) => this.heroService.searchHero(term)),
      distinctUntilChanged(),
      debounceTime(300),
    )
  }

  search(term: string) {
    this.searchTerms.next(term);
  }
}