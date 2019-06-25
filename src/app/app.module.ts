import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { CommonModule } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
