import { createReducer, on, Action, State } from "@ngrx/store";
import { GlobalState } from './state';
import { changeTheme, toggleScreaming } from './actions';

const initialState: GlobalState = {
  style: {
    theme: 'standard',
    screaming: false,
  },
  loggedIn: false,
};

const reducer = createReducer(
  initialState,
  on(changeTheme, (state, { theme }) => ({ ...state, style: { ...state.style, theme } })),
  on(toggleScreaming, state => ({ ...state, style: { ...state.style, screaming: !state.style.screaming }})),
);

export function globalStateReducer(state: GlobalState | undefined, action: Action) {
  return reducer(state, action);
}
