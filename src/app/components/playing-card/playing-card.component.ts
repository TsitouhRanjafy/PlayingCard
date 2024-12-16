import { Component, input, Input, InputSignal, OnChanges, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterTypeProprieties } from '../../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent implements OnChanges{
  
  @Input() monster: Monster = new Monster();
  backgroundColor: string = '#ff0033'

  // changer la bg color selon son type de monstre
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['monster']){
      this.backgroundColor = MonsterTypeProprieties[this.monster.type].color;
      console.log(MonsterTypeProprieties[this.monster.type].color);
      
    }
  }

}
