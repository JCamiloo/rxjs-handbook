import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.put(url, {
//   id: 1,
//   name: 'Juan'
// }, {
//   'token': 'JCOA123'
// }).subscribe(console.log);

ajax({
  url,
  method: 'POST',
  headers: {
    'mi-token': 'ABC123'
  },
  body: {
    id: 1,
    name: 'Juan'
  }
}).subscribe(console.log);