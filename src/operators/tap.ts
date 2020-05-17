import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numbers$ = range(1,5);
numbers$.pipe(
  tap(x => {
    console.log('before', x);
    return 100;
  }),
  map(val => val * 10),
  tap({
    next: value => console.log('after', value),
    complete: () => console.log('finished')
  }))
  .subscribe(val => console.log('subs', val));