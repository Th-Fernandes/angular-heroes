import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHeroComponent } from './selected-hero.component';

describe('SelectedHeroComponent', () => {
  let component: SelectedHeroComponent;
  let fixture: ComponentFixture<SelectedHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedHeroComponent]
    });
    fixture = TestBed.createComponent(SelectedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
