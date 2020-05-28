import { fromEvent, asyncScheduler } from "rxjs";
import { throttleTime, pluck, distinctUntilChanged, map } from "rxjs/operators";

const click$ = fromEvent(document, 'click');
click$.pipe(throttleTime(2000)).subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$.pipe(
  throttleTime(500, asyncScheduler, {
    leading: true,
    trailing: true
  }),
  pluck('target','value'),
  map<string,string>(value => value.trim()),
  distinctUntilChanged()
).subscribe(console.log);