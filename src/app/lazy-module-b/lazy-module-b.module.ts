import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleBRoutingModule } from './lazy-module-b-routing.module';
import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';


@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
    LazyModuleBRoutingModule,
  ]
})
export class LazyModuleBModule { }
