import { createAction, props } from '@ngrx/store';

export const getResultStart = createAction('[ModuleX] Get result');
export const getResultSuccess = createAction('[ModuleX] Get result success', props<{ payload: any }>());
export const setServiceName = createAction('[ModuleX] Set service name', props<{ payload: string }>());
