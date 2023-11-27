import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHeroComponent } from './selected-hero.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SelectedHeroComponent', () => {
  let component: SelectedHeroComponent;
  let fixture: ComponentFixture<SelectedHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
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
