import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { standardModuleXRoutes } from './standard-module-x/standard-module-x-routes';


const routes: Routes = [
  {
    path: 'module-a',
    loadChildren: () => import('./lazy-module-a/lazy-module-a.module').then(m => m.LazyModuleAModule),
  },
  {
    path: 'module-b',
    loadChildren: () => import('./lazy-module-b/lazy-module-b.module').then(m => m.LazyModuleBModule),
  },
  standardModuleXRoutes,
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
