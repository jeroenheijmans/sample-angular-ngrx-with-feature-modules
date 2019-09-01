import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';
import { StandardService } from './standard.service';
import { StoreModule } from '@ngrx/store';
import { moduleXStateReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from './store/effects';
import { moduleXFeatureKey } from './store/state';


@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(moduleXFeatureKey, moduleXStateReducer),
    EffectsModule.forFeature([ItemEffects])
  ],
  providers: [
    StandardService,
    ItemEffects,
  ],
})
export class StandardModuleX { }
