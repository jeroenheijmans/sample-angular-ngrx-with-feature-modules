import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-page-one',
  template: `
    <h2>Lazy Shared Module: Page 1</h2>
    <p><button (click)="onGetItem()">{{ service.name }} item (get)</button></p>
    <p>Results:</p>
    <pre>{{ data | json }}</pre>
  `
})
export class SharedPageOneComponent {
  data = [];

  constructor(public service: SharedService) { }

  onGetItem() {
    this.service.getItem().subscribe(r => this.data.push(r));
  }

}
