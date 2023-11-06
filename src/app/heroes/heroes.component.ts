import { Component } from '@angular/core';
import { HEROES } from 'src/__test__/mock-heroes';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero: Hero | undefined;

  onSelect(hero: Hero) {
    console.log('fire')
    this.selectedHero = hero;
  }
}
