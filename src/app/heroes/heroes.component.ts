import { Component } from '@angular/core';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {
  heroes: Hero[] = [
    {
      id: 1,
      name: "blitzCrank"
    },
    {
      id: 2,
      name: "Pyke"
    }
  ]
}
