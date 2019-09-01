import { Component, OnDestroy } from '@angular/core';
import { State } from './store/state';
import { Store, select } from '@ngrx/store';
import { selectContainerStyleInfo } from './store/global/selectors';
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
    '.busy { pointer-events: none; opacity: 0.5; }',
  ]
})
export class AppComponent implements OnDestroy {
  containerClasses = 'container';
  componentDestroyed$ = new Subject();

  constructor(
    private store: Store<State>,
  ) {
    this.store.pipe(
      select(selectContainerStyleInfo),
      takeUntil(this.componentDestroyed$),
    ).subscribe(state => this.containerClasses = [
      'container',
      state.style.theme,
      state.style.screaming && 'screaming',
      state.isBusy && 'busy',
    ].filter(Boolean).join(' '));
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
