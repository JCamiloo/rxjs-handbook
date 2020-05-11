import { range, asyncScheduler } from 'rxjs';

const src1$ = range(0, 10);
const src2$ = range(0, 10, asyncScheduler);

console.log('started');
//src1$.subscribe(console.log);
src2$.subscribe(console.log);
console.log('finished');
