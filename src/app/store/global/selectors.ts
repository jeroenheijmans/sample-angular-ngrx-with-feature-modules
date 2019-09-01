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

export const selectLoginError = createSelector(
  selectGlobalState,
  (state: GlobalState) => state.loginError,
);

export const selectContainerStyleInfo = createSelector(
  selectGlobalState,
  (state: GlobalState) => ({ style: state.style, isBusy: state.isBusy }),
);
