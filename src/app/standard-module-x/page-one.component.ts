import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getResultStart } from './store/actions';
import { selectApiResults, selectIsBusy, selectServiceName } from './store/selectors';

@Component({
  selector: 'app-page-one',
  template: `
    <h2>Standard Module X: Page 1</h2>
    <p>Uses NgRx Effects and the Store to handle side effects via a service.</p>
    <p><button (click)="onGetItem()">{{ serviceName$ | async }} item (get)</button></p>
    <p>Results: <span *ngIf="isBusy$ | async">(loading...)</span></p>
    <pre>{{ data$ | async | json }}</pre>
  `
})
export class PageOneComponent {
  data$ = this.store.select(selectApiResults);
  isBusy$ = this.store.select(selectIsBusy);
  serviceName$ = this.store.select(selectServiceName);

  constructor(
    private store: Store<{}>,
  ) { }

  onGetItem() {
    this.store.dispatch(getResultStart());
  }

}
