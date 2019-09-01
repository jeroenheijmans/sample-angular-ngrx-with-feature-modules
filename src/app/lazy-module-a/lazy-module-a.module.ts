import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleARoutingModule } from './lazy-module-a-routing.module';
import { PageOneComponent } from './page-one.component';
import { PageTwoComponent } from './page-two.component';
import { LazySharedModule } from '@shared/lazy-shared.module';
import { StoreModule } from '@ngrx/store';
import { moduleAFeatureKey, reducer, actions, selectors } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ItemEffects } from '@shared/store/effects';
import { SHARED_MODULE_KEY, SHARED_MODULE_ACTIONS, SHARED_MODULE_SELECTORS } from '@shared/module-tokens';


@NgModule({
  declarations: [
    PageOneComponent,
    PageTwoComponent,
  ],
  imports: [
    CommonModule,
    LazySharedModule,
    LazyModuleARoutingModule,
    StoreModule.forFeature(moduleAFeatureKey, reducer),
    EffectsModule.forFeature([ItemEffects]),
  ],
  providers: [
    { provide: SHARED_MODULE_KEY, useValue: moduleAFeatureKey },
    { provide: SHARED_MODULE_ACTIONS, useValue: actions },
    { provide: SHARED_MODULE_SELECTORS, useValue: selectors },
  ],
})
export class LazyModuleAModule { }
