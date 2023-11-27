import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesLiComponent } from './heroes-li.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroesLiComponent', () => {
  let component: HeroesLiComponent;
  let fixture: ComponentFixture<HeroesLiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule], 
      declarations: [HeroesLiComponent]
    });
    fixture = TestBed.createComponent(HeroesLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have hero heading', () => {
    component.hero = { id: 1, name: 'Dr world'}
    // expect().toMatch(`1 - Dr world`);
  })
});
