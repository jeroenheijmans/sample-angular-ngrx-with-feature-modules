import { createAction, props } from '@ngrx/store';
import { Themes } from './state';

export const changeTheme = createAction('[Style] Change style theme', props<{ theme: Themes }>());
export const toggleScreaming = createAction('[Style] Toggle style screaming');
