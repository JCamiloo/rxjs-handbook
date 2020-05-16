import { asyncScheduler } from 'rxjs'

const greet = () => console.log('Hi');
const customGreet = name => console.log(`Hi ${name}`);

asyncScheduler.schedule(greet, 2000);
asyncScheduler.schedule(customGreet, 2000, 'Juan');

const subs = asyncScheduler.schedule( function(state){
  console.log('state', state);
  this.schedule(state + 1, 1000);
}, 3000, 0);

// setTimeout(() => subs.unsubscribe(), 12000);
asyncScheduler.schedule(() => subs.unsubscribe(), 12000);