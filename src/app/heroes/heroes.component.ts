import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/__test__/mock-heroes';
import { Hero } from 'src/interfaces/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService
    ) { }
    
  heroes: Hero[] = [];
  selectedHero?: Hero;
  
  ngOnInit(): void {
      this.getHeroes();
  }
  
  getHeroes() {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
