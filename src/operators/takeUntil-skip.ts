import { interval, fromEvent } from "rxjs";
import { takeUntil, tap, skip } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Stop timer';
document.querySelector('body').append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, 'click').pipe(
  tap(() => 'before tap'),
  skip(1),
  tap(() => 'after tap'),
);

counter$.pipe(
  takeUntil(clickBtn$)
).subscribe({
  next: val => console.log('next', val),
  complete: () => console.log('complete')
});
