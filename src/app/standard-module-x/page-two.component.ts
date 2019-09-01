import { Component } from '@angular/core';
import { StandardService } from './standard.service';

@Component({
  selector: 'app-page-two',
  template: `
    <h2>Standard Module X: Page 2</h2>
    <p><button (click)="onGetItem()">{{ service.name }} item (get)</button></p>
    <p>Results:</p>
    <pre>{{ data | json }}</pre>
  `
})
export class PageTwoComponent {
  data = [];

  constructor(public service: StandardService) { }

  onGetItem() {
    this.service.getItem().subscribe(r => this.data.push(r));
  }
}
