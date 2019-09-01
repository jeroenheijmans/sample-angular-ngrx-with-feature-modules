import { Component } from '@angular/core';
import { State } from './store/state';
import { Store, select } from '@ngrx/store';
import { selectStyle } from './store/global/selectors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <div [class]="containerClasses">
      <header><app-header></app-header></header>
      <nav><app-menu></app-menu></nav>
      <div class="content"><router-outlet></router-outlet></div>
    </div>
  `,
  styles: [
    '.standard { }',
    '.comic { font-family: "MV Boli", cursive; }',
    '.print { font-family: "Georgia", serif; }',
    '.screaming { text-transform: uppercase; }',
  ]
})
export class AppComponent {
  containerClasses = 'container';
  componentDestroyed$ = new Subject();

  constructor(
    private store: Store<State>,
  ) {
    this.store.pipe(
      select(selectStyle),
      takeUntil(this.componentDestroyed$),
    ).subscribe(s => this.containerClasses = `container ${s.theme} ${s.screaming ? 'screaming' : ''}`);
  }
}
