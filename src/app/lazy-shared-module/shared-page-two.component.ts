import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-page-two',
  template: `
    <h2>Lazy Shared Module: Page 2</h2>
    <p><button (click)="onGetItem()">Get item from Shared Service</button></p>
    <p>Results:</p>
    <pre>{{ data | json }}</pre>
  `
})
export class SharedPageTwoComponent {
  data = [];

  constructor(private standardService: SharedService) { }

  onGetItem() {
    this.standardService.getItem().subscribe(r => this.data.push(r));
  }

}
