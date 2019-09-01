import { createReducer, Action, on } from "@ngrx/store";
import { getResultStart, getResultSuccess, setServiceName } from './actions';
import { ModuleXState } from './state';

const initialState: ModuleXState = {
  serviceName: '',
  apiResults: [],
  isBusy: false,
};

const reducer = createReducer(
  initialState,

  on(getResultStart, (state) => ({
    ...state,
    apiResults: [...state.apiResults],
    isBusy: true,
  })),

  on(getResultSuccess, (state, result: any) => ({
    ...state,
    apiResults: [...state.apiResults, result.payload],
    isBusy: false,
  })),

  on(setServiceName, (state, result: any) => ({
    ...state,
    serviceName: result.payload,
  }))
);

export function moduleXStateReducer(state: ModuleXState | undefined, action: Action) {
  return reducer(state, action);
}
