import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdProgressSpinnerModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdMenuModule, MdSliderModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery'


import { AppComponent } from './app.component';

import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdSidenavModule,
    MdIconModule,
    MdToolbarModule,
    MdMenuModule,
    BrowserAnimationsModule,
    Angular2ImageGalleryModule,
    MdSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
