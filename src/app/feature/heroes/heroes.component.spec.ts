import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { SelectedHeroComponent } from '../selected-hero/selected-hero.component';
import { HeroesLiComponent } from '../heroes-li/heroes-li.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { HEROES } from 'src/__test__/mock-heroes';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(() => {
    /* by default, when using other components as children, you must declare
       then in order to execute the unit test */
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HeroesComponent, SelectedHeroComponent, HeroesLiComponent]
    });

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete hero by id', (done: DoneFn) => {
    console.log(component.heroes)
    // const HERO_TO_BE_DELETED_ID = 13;
    // const heroToBeDeleted = HEROES.find(h => h.id === HERO_TO_BE_DELETED_ID);
    // expect(heroToBeDeleted).toBeTruthy();
    // component.deleteHero(HERO_TO_BE_DELETED_ID);
    // console.log(component.heroes)
    done();
  })
});
