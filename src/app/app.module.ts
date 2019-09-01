import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home.component';
import { StandardModuleX } from './standard-module-x/standard-module-x.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StandardModuleX,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
