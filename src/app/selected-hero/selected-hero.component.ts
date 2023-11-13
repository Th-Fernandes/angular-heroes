import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/interfaces/hero';
import { HeroService } from '../hero.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-selected-hero',
  templateUrl: './selected-hero.component.html',
  styleUrls: ['./selected-hero.component.scss']
})
export class SelectedHeroComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  @Input() selectedHero?: Hero

  ngOnInit(): void {
    const idParam = this.getIdParam();
    const isIdParamValid = idParam != 0 && typeof idParam == 'number';
    if(isIdParamValid) this.getSelectedHeroById(idParam);
  }

  private getIdParam() {
    const routeParam = this.route.snapshot.paramMap;
    return Number( routeParam.get('id') );
  }

  private getSelectedHeroById(id: number) {
    this.heroService.getHeroes().subscribe(heroes => {
      this.selectedHero = heroes.find(h => h.id === id);    
    })
  }

  navigateToPreviousPath() {
    this.location.back();
  }
}
