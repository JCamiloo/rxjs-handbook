import { of } from 'rxjs';

// const obs = of(1,2,3,4,5,6);
const obs = of<number>(...[1,2,3,4,5,6],7,8,9);

obs.subscribe(next => console.log('next', next), null, () => console.log('completed'));