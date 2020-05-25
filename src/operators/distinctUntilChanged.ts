import { of, from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Character {
  name: string;
}

const characters: Character[] = [
  { name: 'name1' },
  { name: 'name1' },
  { name: 'name3' },
  { name: 'name4' },
  { name: 'name5' },
  { name: 'name1' },
  { name: 'name2' },
  { name: 'name2' },
];

from(characters).pipe(
  distinctUntilChanged((prv, crt) => prv.name === crt.name))
  .subscribe(console.log);