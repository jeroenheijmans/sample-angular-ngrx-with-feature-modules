import { RouterReducerState } from '@ngrx/router-store';
import { CustomRouterState } from './custom-router-state';
import { GlobalState } from './global/state';
import { createFeatureSelector } from '@ngrx/store';

export interface State {
  router: RouterReducerState<CustomRouterState>;
  app: GlobalState;
}

export const selectGlobalState = createFeatureSelector<State, GlobalState>('app');
