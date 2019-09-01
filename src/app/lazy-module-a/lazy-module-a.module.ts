import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleARoutingModule } from './lazy-module-a-routing.module';
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
    LazyModuleARoutingModule,
  ]
})
export class LazyModuleAModule { }
