import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

range(1,5).pipe(map<number,string>(val => (val * 10).toString())).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(map<KeyboardEvent, string>(val => val.key)).subscribe(console.log);