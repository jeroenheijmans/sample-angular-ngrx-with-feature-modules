import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
  login({ username, password }): Observable<boolean> {
    return (username && password)
      ? of(true).pipe(delay(500))
      : throwError('Login failed!');
  }

  logout(): Observable<void> {
    return of(null).pipe(delay(200));
  }
}
