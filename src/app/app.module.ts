import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { TestComponent } from './containers/test/test.component';
import { TestService } from './share/test.service';
import { ConfigService } from './config/config.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ConfigService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
