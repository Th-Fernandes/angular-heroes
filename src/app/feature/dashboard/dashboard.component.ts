import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/core/services/hero.service';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  heroes?: Hero[];

  ngOnInit(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
