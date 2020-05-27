import { fromEvent } from "rxjs";
import { debounceTime, pluck, distinctUntilChanged, map } from "rxjs/operators";

const click$ = fromEvent(document, 'click');
click$.pipe(debounceTime(2000)).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
  debounceTime(500),
  pluck('target','value'),
  map<string,string>(value => value.trim()),
  distinctUntilChanged()
).subscribe(console.log);