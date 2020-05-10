import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.info('Completed')
}

const interval$ = new Observable<number>(subs => {
  const interval = setInterval(() => subs.next(Math.random()), 1000);
  return () => {
    clearInterval(interval);
    console.log('interval destroyed');
  }; 
});

const subject$ = new Subject();
const subscription1 = interval$.subscribe(subject$);

const subscription2 = subject$.subscribe(observer);
const subscription3 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription1.unsubscribe();
}, 3500);