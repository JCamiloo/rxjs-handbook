import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5, 6];
const totalReducer = (acc: number, crt: number) => acc + crt;

// Reduce
from(numbers).pipe(reduce(totalReducer)).subscribe(console.log)

// Scan
const newNumbers = [];
from(numbers).pipe(scan(totalReducer)).subscribe(val => {
  newNumbers.push(val); 
  console.log(newNumbers);
});

// Redux
interface User {
  id?: string;
  auth?: boolean;
  token?: string;
  age?: number;
}

const user: User[] = [
  { id: 'Juan', auth: false, token: '1JS2' },
  { id: 'Juan', auth: true, token: '1KS2' },
  { id: 'Juan', auth: true, token: '1JS3' },
];

const state$ = from(user).pipe(
  scan<User>((acc, crt) => {
    return { ...acc, ...crt }
  }, { age: 23 })
);

const id$ = state$.pipe(map(state => state.id));
id$.subscribe(console.log);