import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  constructor() { }


  hello(): void {
    console.log('Hello');
    
  }
}
