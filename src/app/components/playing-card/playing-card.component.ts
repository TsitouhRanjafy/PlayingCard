import { Component, input, OnChanges, SimpleChanges , Signal , signal} from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProprieties } from '../../utils/monster.utils';
import { computed } from '@angular/core';
import { WritableSignal } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {
  
  monster = input(new Monster());
  backgroundColor: Signal<string> = computed(() => MonsterTypeProprieties[this.monster().type].color)

}
