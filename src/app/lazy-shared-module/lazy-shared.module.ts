import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedPageOneComponent } from './shared-page-one.component';
import { SharedPageTwoComponent } from './shared-page-two.component';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    SharedPageOneComponent,
    SharedPageTwoComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    SharedService,
  ],
})
export class LazySharedModule { }
