import { interval, timer } from 'rxjs';

const observer = {
  next: value => console.log(value),
  complete: () => console.log('completed'),
}

const inFiveSeconds = new Date();
inFiveSeconds.setSeconds(inFiveSeconds.getSeconds() + 5);

const interval$ = interval(1000);

// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(inFiveSeconds);


// interval$.subscribe(observer);
timer$.subscribe(observer);