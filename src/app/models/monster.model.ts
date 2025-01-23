import { MonsterType } from "../utils/monster.utils";

export class Monster{

    id: number = 1
    name: string = "My Monster 2";
    imgeURL: string = "assets/img2.png";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 40;
    figureCaption : string = 'N°001 Monster';

    attackName: string = 'Geo Impact';
    attackStrength: number = 60;
    attackDescription: string = 'This is a long description of moster capacity Probably something to do with electricity.'

    copy(): Monster {
        return Object.assign(new Monster(),this);
    }

}