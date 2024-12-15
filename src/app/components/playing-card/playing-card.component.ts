import { Component, Input } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {

  @Input({
    required: true,
    alias: 'input-monster-class',
    transform: (value: Monster) => {
      value.hp = value.hp / 2;
      console.log(value.hp);
      return value;
    }
  }) monster: Monster = new Monster();
}
