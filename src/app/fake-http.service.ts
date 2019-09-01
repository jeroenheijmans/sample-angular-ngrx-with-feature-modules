import { of, Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const isoStamp = () => new Date().toISOString();
const randomDelay = () => 500 + Math.floor((Math.random() * 500));

let globalHttpCounter = 0;

export const fakeHttp = {
  get(url: string) : Observable<any> {
    globalHttpCounter++;
    const overallHttpCallCount = globalHttpCounter;
    const requested = isoStamp();
    return of(url).pipe(
      delay(randomDelay()),
      map(url => ({
        overallHttpCallCount,
        url,
        requested,
        responded: isoStamp(),
      })),
    );
  },
};
