import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'page-1',
  },
  {
    path: 'page-1',
    component: PageOneComponent,
  },
  {
    path: 'page-2',
    component: PageTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleBRoutingModule { }
