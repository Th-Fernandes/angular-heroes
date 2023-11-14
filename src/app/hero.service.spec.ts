import { TestBed, waitForAsync } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HEROES } from 'src/__test__/mock-heroes';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [  HttpClientTestingModule, HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {dataEncapsulation: false }
      )]
    });
    service = TestBed.inject(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return heroes array', (done: DoneFn) => {
    service.getHeroes()
      .subscribe(heroes => {
        expect(heroes).toEqual(HEROES);
        done();
      });
  })

  it('should return a single hero', (done: DoneFn) => {
    const HERO_ID = 13;
    const HERO = HEROES.find(h => h.id === HERO_ID);
    expect(HERO).toBeTruthy();

    service.getHeroById(HERO_ID)
      .subscribe(hero => {
        expect(hero).toEqual(HERO!);
        done();
      })
  })
});
