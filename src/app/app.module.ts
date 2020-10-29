import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BenchComponent } from './bench/bench.component';
import { FiresComponent } from './fires/fires.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { FireComponent } from './fire/fire.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BenchComponent,
    FiresComponent,
    FireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
