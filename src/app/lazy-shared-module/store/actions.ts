import { createAction, props } from '@ngrx/store';

export function createLazySharedModuleActions(key: string) {
  return {
    getResultStart: createAction(`[${key}] Get result`),
    getResultSuccess: createAction(`[${key}] Get result success`, props<{ payload: any }>()),
    setServiceName: createAction(`[${key}] Set service name`, props<{ payload: string }>()),
  }
}

