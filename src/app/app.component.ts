import { Component , signal , computed, model, inject, effect } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { MonsterService } from './services/monster/monster.service';

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

  monsters = signal<Monster[]>([]);
  search = model('');

  monsterService = inject(MonsterService);

  filterMonsters = computed(() => this.monsters().filter(monster => monster.name.includes(this.search())))

  constructor(){ 
    this.monsters.set(this.monsterService.getAll());
  }

  addMonster() {
    const genericMonster = new Monster();
    this.monsterService.add(genericMonster);
    this.monsters.set(this.monsterService.getAll());
  }
  

}
