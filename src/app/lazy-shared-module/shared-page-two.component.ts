import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-page-two',
  template: `
    <h2>Lazy Shared Module: Page 2</h2>
    <p><button (click)="onGetItem()">{{ service.name }} item (get)</button></p>
    <p>Results:</p>
    <pre>{{ data | json }}</pre>
  `
})
export class SharedPageTwoComponent {
  data = [];

  constructor(public service: SharedService) { }

  onGetItem() {
    this.service.getItem().subscribe(r => this.data.push(r));
  }

}
