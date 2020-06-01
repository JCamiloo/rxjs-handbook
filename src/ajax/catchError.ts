import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/userXs?per_page=5';
const fetchPromise = fetch(url);

const handleErrors = (response : Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

const handleErrorsPro = (error: AjaxError) => {
  console.warn('error', error);
  return of([]);
}

// fetchPromise
//   .then(handleErrors)
//   .then(resp => resp.json())
//   .then(data => console.log('data:', data))
//   .catch(err => console.warn('users error', err));

ajax(url).pipe(
  pluck('response'),
  catchError(handleErrorsPro)
).subscribe(console.log)