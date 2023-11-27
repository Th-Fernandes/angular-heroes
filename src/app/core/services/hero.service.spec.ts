import { TestBed, waitForAsync } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HEROES } from 'src/__test__/mock-heroes';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/core/services/in-memory-data.service';
import { Hero } from 'src/interfaces/hero';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          dataEncapsulation: false,
        }),
      ],
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return heroes array', (done: DoneFn) => {
    service.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(HEROES);
      done();
    });
  });

  it('should return a single hero', (done: DoneFn) => {
    const HERO_ID = 13;
    const HERO = HEROES.find((h) => h.id === HERO_ID);
    expect(HERO).toBeTruthy();

    service.getHeroById(HERO_ID).subscribe((hero) => {
      expect(hero).toEqual(HERO!);
      done();
    });
  });

  it('should update hero name', (done: DoneFn) => {
    const UPDATED_HERO: Hero = {
      id: 13,
      name: 'Mr Strong',
    };

    service.updateHero(UPDATED_HERO).subscribe(() => {
      service.getHeroById(UPDATED_HERO.id).subscribe((hero) => {
        expect(hero).toEqual(UPDATED_HERO);
        done();
      });
    });
  });

  it('should create a new hero', (done: DoneFn) => {
    const NEW_HERO_NAME = 'captain Rumbling';

    service.addHero({ name: NEW_HERO_NAME } as Hero).subscribe(() => {
      service.getHeroes().subscribe((heroes) => {
        const lastHero = heroes[heroes.length - 1];
        expect(lastHero.name).toEqual(NEW_HERO_NAME);
        done();
      });
    });
  });
});
