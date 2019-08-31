import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header><h1>Sample Angular + NgRx Application</h1></header>
      <nav><app-menu></app-menu></nav>
      <div class="content"><router-outlet></router-outlet></div>
    </div>
  `,
})
export class AppComponent {
}
