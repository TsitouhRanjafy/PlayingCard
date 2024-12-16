export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = 'electric',
    FIRE = 'fire',
    WATER = 'water'
}

export interface IMonsterProprieties {
    imageUrl : string,   
    color: string
}

export const MonsterTypeProprieties: {[key : string]:IMonsterProprieties} = { 
    [MonsterType.PLANT]: {
        imageUrl : 'assets/img1.png',
        color: 'rgba(135,100,124)'
    },
    [MonsterType.ELECTRIC]: {
        imageUrl : 'assets/img2.png',
        color: 'rgba(135,255,244)'
    },
    [MonsterType.FIRE]: {
        imageUrl : 'assets/img3.png',
        color: 'rgba(135,255,124)'
    },
    [MonsterType.WATER]: {
        imageUrl : 'assets/img4.png',
        color: 'rgba(24,0,124)'
    }
}