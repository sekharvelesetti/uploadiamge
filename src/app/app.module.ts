import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';



@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
