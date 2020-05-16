import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

range(1,10).pipe(filter(val => val % 2 === 1)).subscribe(console.log);

interface Character {
  type: string;
  name: string;
}

const characters: Character[] = [
  {
    type: 'Hero',
    name: 'Batman'
  },
  {
    type: 'Hero',
    name: 'Robin'
  },
  {
    type: 'Villain',
    name: 'Joker'
  }
];

from(characters).pipe(filter(character => character.type === 'Hero')).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(map(event => event.code), filter(event => event === 'Enter')).subscribe(console.log);