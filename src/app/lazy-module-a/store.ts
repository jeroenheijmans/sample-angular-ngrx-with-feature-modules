import { State } from '../store/state';
import { LazyModuleState } from '@shared/store/state';
import { createFeatureSelector } from '@ngrx/store';
import { createLazySharedModuleActions } from '@shared/store/actions';
import { createLazySharedModuleSelectors } from '@shared/store/selectors';
import { createLazySharedModuleReducer } from '@shared/store/reducers';

export interface RootState extends State {
  moduleA: LazyModuleState;
}

export const moduleAFeatureKey = 'moduleA';
export const selectModuleAState = createFeatureSelector<RootState, LazyModuleState>(moduleAFeatureKey);
export const actions = createLazySharedModuleActions(moduleAFeatureKey);
export const selectors = createLazySharedModuleSelectors(selectModuleAState);
export const reducer = createLazySharedModuleReducer(actions);
