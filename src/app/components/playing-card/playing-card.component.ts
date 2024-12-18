import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {

  monster: InputSignal<Monster> = input.required({ 
    alias: 'my-monster',
    transform: (value: Monster) => {
      value.hp = value.hp * 2;
      return value;
    }
  });
}
