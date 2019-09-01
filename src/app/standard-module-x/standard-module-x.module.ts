import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';
import { StandardService } from './standard.service';


@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    StandardService,
  ],
})
export class StandardModuleX { }
