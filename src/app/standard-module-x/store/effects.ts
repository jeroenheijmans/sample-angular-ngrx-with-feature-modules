import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { StandardService } from '../standard.service';
import { Store } from '@ngrx/store';
import { setServiceName } from './actions';

@Injectable()
export class ItemEffects {
  getItem$ = createEffect(() => this.actions$.pipe(
    ofType('[ModuleX] Get result'),
    mergeMap(() => this.service.getItem().pipe(
      map(payload => ({ type: '[ModuleX] Get result success', payload })),
      catchError(() => EMPTY),
    ))
  ));

  constructor(
    private actions$: Actions,
    private service: StandardService,
    private store: Store<{}>,
  ) {
    this.store.dispatch(setServiceName({ payload: service.name }));
  }
}
