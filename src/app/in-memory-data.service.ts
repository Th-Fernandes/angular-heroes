import type { Hero } from 'src/interfaces/hero';

import { Injectable } from '@angular/core';
import { HEROES } from 'src/__test__/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    return {heroes: HEROES};
  }

  genId(heroes: Hero[]): number {
    const isHeroesNotEmpty = heroes.length > 0; 
    const heroesId = heroes.map(h => h.id);
    return isHeroesNotEmpty ? Math.max(...heroesId) + 1 : 11;
  }
}
