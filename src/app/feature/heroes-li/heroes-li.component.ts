import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-heroes-li',
  templateUrl: './heroes-li.component.html',
})
export class HeroesLiComponent {
  @Input() hero?: Hero;
  @Output() deleteHeroEvent = new EventEmitter();

  public deleteHero() {
    if (this.hero?.id) this.deleteHeroEvent.emit();
  }
}
