import { Component } from "@angular/core";
import { Store, select } from '@ngrx/store';
import { selectStyle, selectLoggedIn } from './store/global/selectors';
import { State } from './store/state';
import { changeTheme, toggleScreaming } from './store/global/actions';
import { Themes } from './store/global/state';

@Component({
  selector: 'app-header',
  template: `
    <span style="border-bottom: 1px dotted #fff; float: right; cursor: pointer"
      title="Logging in not available yet">
      {{ (loggedIn$ | async) ? 'logged in' : 'not logged in' }}
    </span>
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
})
export class AppHeaderComponent {
  style$ = this.store.pipe(select(selectStyle));
  loggedIn$ = this.store.pipe(select(selectLoggedIn));

  constructor(
    private store: Store<State>,
  ) { }

  onChangeStyle(theme: Themes) {
    this.store.dispatch(changeTheme({ theme }));
  }

  onToggleScreaming() {
    this.store.dispatch(toggleScreaming());
  }
}
