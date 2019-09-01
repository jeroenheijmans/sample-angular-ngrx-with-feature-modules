import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { SHARED_MODULE_ACTIONS, SHARED_MODULE_SELECTORS } from './module-tokens';

@Component({
  selector: 'app-page-one',
  template: `
    <h2>Lazy Shared Module: Page 1</h2>
    <p>Uses NgRx Effects and the Store to handle side effects via a service.</p>
    <p><button (click)="onGetItem()">{{ serviceName$ | async }} item (get)</button></p>
    <p>Results: <span *ngIf="isBusy$ | async">(loading...)</span></p>
    <pre>{{ data$ | async | json }}</pre>
  `
})
export class SharedPageOneComponent {
  data$ = this.store.select(this.selectors.selectApiResults);
  isBusy$ = this.store.select(this.selectors.selectIsBusy);
  serviceName$ = this.store.select(this.selectors.selectServiceName);

  constructor(
    private store: Store<{}>,
    @Inject(SHARED_MODULE_ACTIONS) private actions: any,
    @Inject(SHARED_MODULE_SELECTORS) private selectors: any,
  ) { }

  onGetItem() {
    this.store.dispatch(this.actions.getResultStart());
  }

}
