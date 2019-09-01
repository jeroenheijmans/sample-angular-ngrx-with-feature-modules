import { createReducer, Action, on } from "@ngrx/store";
import { LazyModuleState } from './state';

export function createLazySharedModuleReducer(actions) {
  const initialState: LazyModuleState = {
    serviceName: '',
    apiResults: [],
    isBusy: false,
  };

  const reducer = createReducer(
    initialState,

    on(actions.getResultStart, (state) => ({
      ...state,
      apiResults: [...state.apiResults],
      isBusy: true,
    })),

    on(actions.getResultSuccess, (state, result: any) => ({
      ...state,
      apiResults: [...state.apiResults, result.payload],
      isBusy: false,
    })),

    on(actions.setServiceName, (state, result: any) => ({
      ...state,
      serviceName: result.payload,
    }))
  );

  return function moduleXStateReducer(state: LazyModuleState | undefined, action: Action) {
    return reducer(state, action);
  }
}
