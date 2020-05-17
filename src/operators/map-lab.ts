import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet imperdiet mattis. Vivamus elementum vestibulum mollis. Morbi vel elit euismod, interdum massa ut, tempor quam. Praesent hendrerit laoreet ipsum, porttitor mollis sem gravida luctus. Etiam lacus justo, laoreet quis lobortis et, ultrices at dui. Vivamus nec faucibus arcu, sed euismod ipsum. Ut ut rutrum libero. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque lectus est, rhoncus et tincidunt vitae, suscipit in sem. Nullam sed enim in urna hendrerit pellentesque. Suspendisse potenti. Etiam at ligula odio. Sed ultrices vulputate laoreet. Vestibulum tincidunt posuere feugiat. Quisque a consequat est.
<br/><br/>
Ut sollicitudin mi in lacus porttitor, nec cursus odio finibus. Sed volutpat sapien eu metus ornare ornare. Praesent mollis a dui vitae placerat. Nunc placerat convallis magna eu pellentesque. Suspendisse nec purus lobortis, suscipit urna molestie, interdum arcu. Curabitur pulvinar justo erat, vel cursus eros ornare id. Duis vulputate aliquam turpis, quis iaculis justo viverra nec. Ut semper accumsan quam sit amet ornare.
<br/><br/>
Nulla a tristique tortor. Suspendisse aliquam sapien massa, a tristique dui cursus at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce posuere sollicitudin ligula, vitae sagittis dolor. Nunc orci augue, varius eget ex in, congue mollis lectus. Aenean suscipit purus et felis vulputate aliquet. Aliquam at dui erat. Mauris dolor odio, consequat a vehicula porta, viverra ac felis. Donec sed urna a neque molestie egestas. Morbi rutrum mauris eu erat bibendum, quis aliquam magna imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sagittis facilisis tristique. Aenean in efficitur magna, vel vestibulum purus.
<br/><br/>
Nunc orci diam, aliquet at lobortis a, bibendum ut sapien. Mauris nec varius turpis, non condimentum purus. Morbi vel ultricies diam, eu commodo nulla. Praesent fermentum felis id erat tristique condimentum. Nulla aliquet bibendum dui. Donec eget convallis nulla. Nunc non neque nec diam ultricies luctus. Vestibulum a elit a ipsum commodo condimentum a sed lorem. Mauris non elit ac metus efficitur malesuada sit amet id lacus. Nulla faucibus metus quis dui porttitor, at pharetra sem rhoncus.
<br/><br/>
Etiam lobortis odio vel ornare rutrum. Morbi sed elit a odio faucibus venenatis. Suspendisse imperdiet, purus facilisis ultricies condimentum, justo orci interdum ante, non aliquam urna lorem sit amet odio. Ut a justo sit amet augue luctus bibendum at non nisi. Praesent tempor ante in tellus semper congue. Maecenas eget libero aliquam turpis gravida faucibus vitae ac nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In nec sapien ut quam volutpat ornare vel a sem. Cras at interdum elit. Vivamus finibus vel eros vel molestie. Donec facilisis, lacus id ornare tincidunt, est neque lobortis sem, ut semper eros lacus vel orci. Praesent sollicitudin sollicitudin mollis. In dui est, posuere et massa nec, facilisis eleifend eros. Aenean vulputate leo vitae euismod aliquet.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

const scroll$ = fromEvent(document, 'scroll');

const calculateScrollPercetange = (event) => {
  const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100; 
}

const progress$ = scroll$.pipe(
  map(calculateScrollPercetange),
  tap(console.log)
);

progress$.subscribe(percentage => {
  progressBar.style.width = `${percentage}%`;
});