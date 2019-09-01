import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <ul>
      <li><a routerLinkActive='active' routerLink="/" [routerLinkActiveOptions]="{exact:
        true}">Home</a></li>
      <li>
        <a routerLinkActive='active' routerLink="/module-a">Lazy Module A</a>
        <ul>
          <li><a routerLinkActive='active' routerLink="/module-a/page-1">Page One</a></li>
          <li><a routerLinkActive='active' routerLink="/module-a/page-2">Page Two</a></li>
          <li><a routerLinkActive='active' routerLink="/module-a/shared-page-1">Shared One</a></li>
          <li><a routerLinkActive='active' routerLink="/module-a/shared-page-2">Shared Two</a></li>
        </ul>
      </li>
      <li>
        <a routerLinkActive='active' routerLink="/module-b">Lazy Module B</a>
        <ul>
          <li><a routerLinkActive='active' routerLink="/module-b/page-1">Page One</a></li>
          <li><a routerLinkActive='active' routerLink="/module-b/page-2">Page Two</a></li>
          <li><a routerLinkActive='active' routerLink="/module-b/shared-page-1">Shared One</a></li>
          <li><a routerLinkActive='active' routerLink="/module-b/shared-page-2">Shared Two</a></li>
        </ul>
      </li>
      <li>
        <a routerLinkActive='active' routerLink="/module-x">Standard Module X</a>
        <ul>
          <li><a routerLinkActive='active' routerLink="/module-x/page-1">Page One</a></li>
          <li><a routerLinkActive='active' routerLink="/module-x/page-2">Page Two</a></li>
        </ul>
      </li>
    </ul>
  `,
})
export class MenuComponent {
}
