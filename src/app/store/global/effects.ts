import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable()
export class AuthEffects {
  loginStart$ = createEffect(() => this.actions$.pipe(
    ofType('[Auth] Log in'),
    exhaustMap(({ username, password }) => this.authService.login({ username, password }).pipe(
      map(_ => ({ type: '[Auth] Log in success' })),
      catchError(() => of({ type: '[Auth] Log in error' })),
    )),
  ));

  logoutStart$ = createEffect(() => this.actions$.pipe(
    ofType('[Auth] Log out'),
    exhaustMap(() => this.authService.logout().pipe(
      map(() => ({ type: '[Auth] Log out success' })),
      catchError(() => EMPTY),
    )),
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
