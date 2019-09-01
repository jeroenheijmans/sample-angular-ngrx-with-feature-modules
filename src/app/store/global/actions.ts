import { createAction, props } from '@ngrx/store';
import { Themes } from './state';

export const changeTheme = createAction('[Style] Change style theme', props<{ theme: Themes }>());
export const toggleScreaming = createAction('[Style] Toggle style screaming');

export const login = createAction('[Auth] Log in', props<{ username: string, password: string }>());
export const loginSuccess = createAction('[Auth] Log in success');
export const loginError = createAction('[Auth] Log in error');

export const logout = createAction('[Auth] Log out');
export const logoutSuccess = createAction('[Auth] Log out success');
