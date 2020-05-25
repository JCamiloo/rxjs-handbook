import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

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

from(characters).pipe(distinctUntilKeyChanged('name')).subscribe(console.log);