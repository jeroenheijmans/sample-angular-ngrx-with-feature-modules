import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { CustomRouterState } from "../custom-router-state";

export interface State {
  router: RouterReducerState<CustomRouterState>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
