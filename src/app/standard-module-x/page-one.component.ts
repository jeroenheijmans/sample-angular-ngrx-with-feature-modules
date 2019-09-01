import { Component } from '@angular/core';
import { StandardService } from './standard.service';

@Component({
  selector: 'app-page-one',
  template: `
    <h2>Standard Module X: Page 1</h2>
    <p><button (click)="onGetItem()">Get item from Standard Service</button></p>
    <p>Results:</p>
    <pre>{{ data | json }}</pre>
  `
})
export class PageOneComponent {
  data = [];

  constructor(private standardService: StandardService) { }

  onGetItem() {
    this.standardService.getItem().subscribe(r => this.data.push(r));
  }

}
