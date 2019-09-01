import { createReducer, on, Action, State } from "@ngrx/store";
import { GlobalState } from './state';
import { changeTheme, toggleScreaming, loginSuccess, logoutSuccess, login, logout, loginError } from './actions';

const initialState: GlobalState = {
  style: {
    theme: 'standard',
    screaming: false,
  },
  loggedIn: false,
  loginError: false,
  isBusy: false,
};

const reducer = createReducer(
  initialState,
  on(changeTheme, (state, { theme }) => ({
    ...state,
    style: { ...state.style, theme },
  })),

  on(toggleScreaming, state => ({
    ...state,
    style: { ...state.style, screaming: !state.style.screaming , }
  })),

  on(login, state => ({
    ...state,
    loginError: false,
    isBusy: true,
  })),

  on(loginSuccess, state => ({
    ...state,
    loggedIn: true,
    isBusy: false,
  })),

  on(loginError, state => ({
    ...state,
    loginError: true,
    isBusy: false,
  })),

  on(logout, state => ({
    ...state,
    isBusy: true,
  })),

  on(logoutSuccess, state => ({
    ...state,
    loggedIn: false,
    isBusy: false,
  })),
);

export function globalStateReducer(state: GlobalState | undefined, action: Action) {
  return reducer(state, action);
}
