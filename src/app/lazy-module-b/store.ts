import { State } from '../store/state';
import { LazyModuleState } from '@shared/store/state';
import { createFeatureSelector } from '@ngrx/store';
import { createLazySharedModuleActions } from '@shared/store/actions';
import { createLazySharedModuleSelectors } from '@shared/store/selectors';
import { createLazySharedModuleReducer } from '@shared/store/reducers';

export interface RootState extends State {
  moduleB: LazyModuleState;
}

export const moduleBFeatureKey = 'moduleB';
export const selectModuleBState = createFeatureSelector<RootState, LazyModuleState>(moduleBFeatureKey);
export const actions = createLazySharedModuleActions(moduleBFeatureKey);
export const selectors = createLazySharedModuleSelectors(selectModuleBState);
export const reducer = createLazySharedModuleReducer(actions);
