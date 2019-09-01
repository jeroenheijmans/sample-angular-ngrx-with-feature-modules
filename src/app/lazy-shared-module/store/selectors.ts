import { createSelector } from '@ngrx/store';
import { LazyModuleState } from './state';

export function createLazySharedModuleSelectors(selectModuleState) {
  return {
    selectApiResults: createSelector(
      selectModuleState,
      (state: LazyModuleState) => state.apiResults,
    ),

    selectIsBusy: createSelector(
      selectModuleState,
      (state: LazyModuleState) => state.isBusy,
    ),

    selectServiceName: createSelector(
      selectModuleState,
      (state: LazyModuleState) => state.serviceName,
    ),
  };
}
