import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5, 6];

const totalReducer = (acc: number, crt: number) => acc + crt;
const total = numbers.reduce(totalReducer, 0);
console.log(total);

interval(500).pipe(
  take(7),
  tap(console.log),
  reduce(totalReducer)
).subscribe({
  next: val => console.log(val),
  complete: () => console.log('complete')
})