import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/interfaces/hero';
import { HeroService } from 'src/app/core/services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-selected-hero',
  templateUrl: './selected-hero.component.html',
})
export class SelectedHeroComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  selectedHero?: Hero;

  ngOnInit(): void {
    const idParam = this.getIdParam();
    const isIdParamValid = idParam != 0 && typeof idParam == 'number';
    if (isIdParamValid) this.getSelectedHeroById(idParam);
  }

  private getIdParam() {
    const routeParam = this.route.snapshot.paramMap;
    return Number(routeParam.get('id'));
  }

  private getSelectedHeroById(id: number) {
    this.heroService
      .getHeroById(id)
      .subscribe((hero) => (this.selectedHero = hero));
  }

  navigateToPreviousPath() {
    this.location.back();
  }

  saveHeroNameChanging() {
    if (this.selectedHero)
      this.heroService
        .updateHero(this.selectedHero)
        .subscribe(() => this.navigateToPreviousPath());
  }
}
