import { fromEvent } from 'rxjs';
import { pluck, mapTo } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(mapTo('key pressed')).subscribe(console.log);