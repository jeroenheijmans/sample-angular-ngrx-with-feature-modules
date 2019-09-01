import { Component } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { selectStyle, selectLoggedIn, selectLoginError } from './store/global/selectors';
import { State } from './store/state';
import { changeTheme, toggleScreaming, login, logout } from './store/global/actions';
import { Themes } from './store/global/state';

@Component({
  selector: 'app-header',
  template: `
    <div style="display: inline-block; float: right">
      <span *ngIf="loggedIn$ | async; else loginWidget">
        Logged in!
        <button (click)="onLogout()">log out</button>
      </span>
      <ng-template #loginWidget>
        <input [(ngModel)]="username" type="text" [class.error]="loginError$ | async">
        <input [(ngModel)]="password" type="password" [class.error]="loginError$ | async">
        <button (click)="onLogin()">log in...</button>
      </ng-template>
    </div>
    <h1 style="margin: 0;">
      <span>Sample Angular + NgRx Application</span>
    </h1>
    <p style="margin: 0;" *ngIf="style$ | async as style">
      <label>
        <input type="checkbox" [value]="style.screaming" (change)="onToggleScreaming()">
        Screaming
      </label>
      <select #theme [ngModel]="style.theme" (change)="onChangeStyle(theme.value)">
        <option>standard</option>
        <option>comic</option>
        <option>print</option>
      </select>
    </p>
  `,
  styles: ['[type=text], [type=password] { width: 8rem; margin-right: 5px; }'],
})
export class AppHeaderComponent {
  style$ = this.store.pipe(select(selectStyle));
  loggedIn$ = this.store.pipe(select(selectLoggedIn));
  loginError$ = this.store.pipe(select(selectLoginError));

  username = '';
  password = '';

  constructor(
    private store: Store<State>,
  ) { }

  onChangeStyle(theme: Themes) {
    this.store.dispatch(changeTheme({ theme }));
  }

  onToggleScreaming() {
    this.store.dispatch(toggleScreaming());
  }

  onLogin() {
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }

  onLogout() {
    this.store.dispatch(logout());
  }
}
