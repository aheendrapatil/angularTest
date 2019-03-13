import { NgModule }      from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent }           from './app.component';
import {AppRoutingModule} from './app-routing.module';

import { UsersComponent } from './components/users/users.component';
import { AlbumComponent } from './components/album/album.component';
import { PhotoComponent } from './components/photo/photo.component';
import {CommonService} from './services/common.service';
// import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';
// import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumComponent,
    PhotoComponent,
    // HeroFormTemplateComponent,
    // HeroFormReactiveComponent,
    // ForbiddenValidatorDirective
  ],
  providers:[
    CommonService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
