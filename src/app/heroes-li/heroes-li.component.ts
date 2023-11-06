import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-heroes-li',
  templateUrl: './heroes-li.component.html',
  styleUrls: ['./heroes-li.component.scss']
})
export class HeroesLiComponent {
  @Input() hero?: Hero;
  @Output() select = new EventEmitter();
}
