import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/interfaces/hero';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
  ) {}

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }

  addNewHero(heroName: string) {
    this.heroService.addHero({name: heroName} as Hero)
      .subscribe(hero => this.heroes.push(hero))
  }

  deleteHero(heroId: number) {
      const heroesWithoutDeletedHero = this.heroes.filter(h => h.id !== heroId); 

      this.heroService.deleteHero(heroId)
        .subscribe(() => this.heroes = heroesWithoutDeletedHero);
  }
}
