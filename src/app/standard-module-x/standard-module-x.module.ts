import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';


@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class StandardModuleX { }
