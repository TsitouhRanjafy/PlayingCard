import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monsters: Monster[] = []
  currentIndex: number = 1;

  constructor() { 
    this.load();
  }

  private save() {
    if (typeof window !== 'undefined'){
      localStorage.setItem('monster',JSON.stringify(this.monsters))
      console.log(localStorage.getItem('monster'));
      
    }
  }

  /**
   * get saved data
   * if data empty, init and save data
   */
  private load(){
    let monsterSavedData = undefined;
    if (typeof window !== 'undefined') {
      // localStorage.removeItem('monster');
      monsterSavedData = localStorage.getItem('monster');
      if (monsterSavedData) {
        this.monsters =  JSON.parse(monsterSavedData).map((monsterJSON: any) => Object.assign(new Monster(),monsterJSON));
        this.currentIndex = Math.max(...this.monsters.map((monster) => monster.id))
      } else {
        this.init()
        this.save()
      }
    }
  }

  // si localStorage est vide
  private init() {
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
    monster3.name = 'sala';
    monster3.imgeURL = "assets/img1.png"
    monster3.hp = 14;
    monster3.type = MonsterType.FIRE
    monster3.figureCaption = 'N°003 Monster'; 
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.name = 'dil';
    monster4.imgeURL = 'assets/img2.png'
    monster4.hp = 20; 
    monster4.type = MonsterType.PLANT
    monster4.figureCaption = 'N°004 Monster';
    this.monsters.push(monster4);
  }

  getAll(): Monster[] {
    return this.monsters.map(monster => monster.copy());
  }

  getById(id: number): Monster | undefined {
    const monster = this.monsters.find(monster => monster.id === id)
    return monster? monster.copy(): undefined
  }

  add(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    monsterCopy.id = this.currentIndex;
    this.monsters.push(monsterCopy.copy());
    this.currentIndex++;
    this.save();

    return monsterCopy;
  }

  update(monster: Monster): Monster {
    const monsterCopy = monster.copy()

    const monsterIndex = this.monsters.findIndex(originalMonster => originalMonster.id === monsterCopy.id)
    if (monsterIndex) {
      this.monsters[monsterIndex] = monsterCopy.copy();
    }

    return monsterCopy;
  }

  delete(id: number) {
    const monsterIndex = this.monsters.findIndex(orignalMonster => orignalMonster.id === id);

    if (monsterIndex != -1 ){
      this.monsters.splice(monsterIndex,1);
    }
  }
}
