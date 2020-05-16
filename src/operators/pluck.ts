import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyup$.pipe(pluck('key')).subscribe(console.log);
keyup$.pipe(pluck('target', 'baseURI')).subscribe(console.log);