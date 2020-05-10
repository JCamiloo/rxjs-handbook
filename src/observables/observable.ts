import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();
const obs$ = new Observable( subs => {
  subs.next('Hello');
  subs.next('World');

  subs.next('Hello');
  subs.next('World');

  subs.complete();

  subs.next('Hello');
  subs.next('World');
});


// obs$.subscribe(
//   value => console.log('next:', value),
//   error => console.warn('error:', error),
//   () => console.info('Completed')
// )

const observer: Observer<any> = {
  next: value => console.log('next:', value),
  error: error => console.warn('error:', error),
  complete: () => console.info('Completed')
}

obs$.subscribe(observer);
