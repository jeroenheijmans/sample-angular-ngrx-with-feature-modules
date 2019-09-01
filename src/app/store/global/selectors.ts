import { createSelector } from '@ngrx/store';
import { GlobalState } from './state';
import { selectGlobalState } from '../state';

export const selectStyle = createSelector(
  selectGlobalState,
  (state: GlobalState) => state.style,
);

export const selectLoggedIn = createSelector(
  selectGlobalState,
  (state: GlobalState) => state.loggedIn,
);
