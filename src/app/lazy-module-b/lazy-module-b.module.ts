import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleBRoutingModule } from './lazy-module-b-routing.module';
import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';
import { LazySharedModule } from '@shared/lazy-shared.module';


@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
    LazySharedModule,
    LazyModuleBRoutingModule,
  ]
})
export class LazyModuleBModule { }
