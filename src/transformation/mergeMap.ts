import { of, interval, fromEvent } from "rxjs";
import { mergeMap, map, takeUntil } from "rxjs/operators";

const letters$ = of('a', 'b', 'c');

letters$.pipe(mergeMap((letter) => interval(1000)
//   .pipe(map(i => letter + i)))).subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('complete')
// }
));

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$)))).subscribe(console.log);