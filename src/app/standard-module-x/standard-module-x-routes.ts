import { Route } from '@angular/router';
import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';


export const standardModuleXRoutes: Route = {
  path: 'module-x',
  component: PageOneComponent,
  children: [
    {
      path: '',
      redirectTo: 'page-1',
      pathMatch: 'full',
    },
    {
      path: 'page-1',
      component: PageOneComponent,
    },
    {
      path: 'page-2',
      component: PageTwoComponent,
    },
  ],
};
