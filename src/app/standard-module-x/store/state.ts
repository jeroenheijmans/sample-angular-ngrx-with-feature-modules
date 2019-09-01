import { State } from '../../store/state';
import { createFeatureSelector } from '@ngrx/store';

export interface ModuleXState {
  serviceName: string;
  apiResults: any[];
  isBusy: boolean;
}

export interface RootState extends State {
  moduleX: ModuleXState;
}

export const moduleXFeatureKey = 'moduleX';

export const selectModuleXState = createFeatureSelector<RootState, ModuleXState>(moduleXFeatureKey);
