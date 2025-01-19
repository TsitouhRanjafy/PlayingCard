import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { MonsterType } from './utils/monster.utils';
import { signal } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PlayingCardComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'playing-cards';

  monsters!: Monster[];
  count: number = 0;
  search: string = '';

  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  })

  constructor(){
    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = 'pik';
    monster1.imgeURL = "assets/img1.png"
    monster1.hp = 10;
    monster1.type = MonsterType.ELECTRIC
    monster1.figureCaption = 'N°001 Monster';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.name = 'carl';
    monster2.imgeURL = 'assets/img2.png'
    monster2.hp = 15;
    monster2.type = MonsterType.WATER
    monster2.figureCaption = 'N°002 Monster';

    monster2.attackStrength =  60;
    monster2.attackDescription = 'This is a long description of moster capacity Probably something to do with electricity.'
    this.monsters.push(monster2);
  }

  increaseCount(){
    this.count++;
  }

  toggleMonster(){
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % this.monsters.length)
  }
}
