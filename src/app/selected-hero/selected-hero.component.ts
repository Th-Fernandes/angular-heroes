import { Component, Input } from '@angular/core';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-selected-hero',
  templateUrl: './selected-hero.component.html',
  styleUrls: ['./selected-hero.component.scss']
})
export class SelectedHeroComponent {
  @Input() selectedHero?: Hero
}
