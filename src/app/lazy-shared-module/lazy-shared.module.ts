import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedPageOneComponent } from './shared-page-one.component';
import { SharedPageTwoComponent } from './shared-page-two.component';


@NgModule({
  declarations: [
    SharedPageOneComponent,
    SharedPageTwoComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class LazySharedModule { }
