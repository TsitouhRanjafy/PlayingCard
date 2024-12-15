import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';

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

  monster1!: Monster;

  constructor(){
    this.monster1 = new Monster();
    this.monster1.name = 'pik';
    this.monster1.hp = 10;
    this.monster1.figureCaption = 'N°001 Monster';
    this.monster1.attackDescription = 'Geo Impact';
    this.monster1.attackStrength =  60;
    this.monster1.attackDescription = 'This is a long description of moster capacity Probably something to do with electricity.'
  }
}
