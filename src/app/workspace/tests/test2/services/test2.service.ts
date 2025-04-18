import { Injectable } from '@angular/core';
import { delay, interval, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Test2Service {
  constructor() {}

  // simulates a delayed http request
  getBankAccountBalance$(): Observable<number> {
    return of(5000000).pipe(delay(100));
  }

  // simulates service that emits bitcoin price every 2 seconds
  getBitcoinPrice$(): Observable<number> {
    return interval(2000).pipe(
      // Every second
      map(() => {
        // Generate a random number between 40,000 and 60,000
        return Math.floor(Math.random() * (60000 - 40000 + 1)) + 40000;
      }),
    );
  }
}
