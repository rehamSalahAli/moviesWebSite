import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { MoviesComponent } from './movies/movies.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { UpComingMoviesComponent } from './up-coming-movies/up-coming-movies.component'
@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    
    MoviesComponent,
    
    TopRatedMoviesComponent,
    
    SideNavbarComponent,
    
    TvComponent,
    
    PeopleComponent,
    
    PopularMoviesComponent,
    
    UpComingMoviesComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
