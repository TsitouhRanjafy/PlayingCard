import { Component , signal , computed } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { MonsterType } from './utils/monster.utils';
import { WritableSignal } from '@angular/core';
import { Signal } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PlayingCardComponent,
    SearchBarComponent,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'playing-cards';

  monsters!: Monster[];
  count: number = 0;
  search: string = '';

  selectedMonsterIndex: WritableSignal<number> = signal(1);
  selectedMonster: Signal<Monster> = computed(() =>  this.monsters[this.selectedMonsterIndex()] )

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
    this.monsters.push(monster2)

    const monster3 = new Monster();
    monster1.name = 'sala';
    monster1.imgeURL = "assets/img1.png"
    monster1.hp = 14;
    monster1.type = MonsterType.ELECTRIC
    monster1.figureCaption = 'N°003 Monster';
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster2.name = 'dil';
    monster2.imgeURL = 'assets/img2.png'
    monster2.hp = 20;
    monster2.type = MonsterType.WATER
    monster2.figureCaption = 'N°004 Monster';
    this.monsters.push(monster4);

    monster2.attackStrength =  60;
    monster2.attackDescription = 'This is a long description of moster capacity Probably something to do with electricity.'
  }

}
