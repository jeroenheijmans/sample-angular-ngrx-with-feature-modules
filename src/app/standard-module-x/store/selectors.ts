import { createSelector } from '@ngrx/store';
import { ModuleXState, selectModuleXState } from './state';

export const selectApiResults = createSelector(
  selectModuleXState,
  (state: ModuleXState) => state.apiResults,
);

export const selectIsBusy = createSelector(
  selectModuleXState,
  (state: ModuleXState) => state.isBusy,
);

export const selectServiceName = createSelector(
  selectModuleXState,
  (state: ModuleXState) => state.serviceName,
);
