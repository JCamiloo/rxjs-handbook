import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.info('Completed')
}

const interval$ = new Observable<number>(suscriber => {
  let counter = 0;
  const interval = setInterval(() => {
    counter++;
    suscriber.next(counter);
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log('interval destroyed')
  }
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    console.log('unsubscribe');
}, 3000);
