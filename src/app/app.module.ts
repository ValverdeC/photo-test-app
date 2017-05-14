import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdProgressSpinnerModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdMenuModule, MdSliderModule, MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';

import 'hammerjs';

import { CollectionComponent } from './collection/collection.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SafePipe } from './shared/pipes/safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    HomePageComponent,
    SafePipe,
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
    MdSliderModule,
    MdCardModule,
    RouterModule.forRoot([
        { path: 'collection', component: CollectionComponent },
        { path: 'home', component: HomePageComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: '**', redirectTo: 'home', pathMatch: 'full'}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
