import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PhotoFormComponent} from './components/photo-form/photo-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material.module';
import {GALLERY_CONFIG, GalleryModule} from 'ng-gallery';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EpicFormComponent } from './components/epic-form/epic-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoFormComponent,
    ToolbarComponent,
    EpicFormComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    GalleryModule
  ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        thumbPosition: 'left'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
