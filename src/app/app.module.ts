import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdProgressSpinnerModule, MdSidenavModule, MdIconModule, MdToolbarModule, MdMenuModule, MdSliderModule, MdCardModule, MdRadioModule, MdDialogModule, MdGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { RouterModule } from '@angular/router';

import { SafePipe } from './shared/pipes/safe.pipe';

import { AppComponent } from './app.component';

import 'hammerjs';

import { CollectionComponent } from './collection/collection.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailDialogOverviewComponent } from './clothings/detail-dialog-overview/detail-dialog-overview.component';
import { ClothingsComponent } from './clothings/clothings.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    HomePageComponent,
    SafePipe,
    DetailDialogOverviewComponent,
    ClothingsComponent
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
        { path: 'clothings', component: ClothingsComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full'},
        { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    MdRadioModule,
    MdDialogModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ DetailDialogOverviewComponent ]
})
export class AppModule { }
