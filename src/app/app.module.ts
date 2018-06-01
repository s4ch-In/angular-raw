import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';


import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]
@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
