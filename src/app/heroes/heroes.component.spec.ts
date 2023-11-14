import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { SelectedHeroComponent } from '../selected-hero/selected-hero.component';
import { HeroesLiComponent } from '../heroes-li/heroes-li.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

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
});
