import { Injectable, Inject } from "@angular/core";
import { createEffect, Actions, ofType, OnIdentifyEffects } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Store } from '@ngrx/store';

import { SharedService } from '@shared/shared.service';
import { SHARED_MODULE_KEY } from '@shared/module-tokens';

@Injectable()
export class ItemEffects implements OnIdentifyEffects {
  ngrxOnIdentifyEffects(): string {
    return this.moduleKey;
  }

  getItem$ = createEffect(() => this.actions$.pipe(
    ofType(`[${this.moduleKey}] Get result`),
    mergeMap(() => this.service.getItem().pipe(
      map(payload => ({ type: `[${this.moduleKey}] Get result success`, payload })),
      catchError(() => EMPTY),
    ))
  ));

  constructor(
    private actions$: Actions,
    private service: SharedService,
    private store: Store<{}>,
    @Inject(SHARED_MODULE_KEY) private moduleKey: string,
  ) {
    this.store.dispatch({ type: `[${moduleKey}] Set service name`, payload: service.name });
  }
}
