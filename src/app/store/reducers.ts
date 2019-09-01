import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';
import { State } from './state';
import { globalStateReducer } from './global/reducers';

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  app: globalStateReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
