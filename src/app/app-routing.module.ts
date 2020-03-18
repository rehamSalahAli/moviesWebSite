import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { UpComingMoviesComponent } from './up-coming-movies/up-coming-movies.component';


const routes: Routes = [
  {path:'' , redirectTo:'movies' , pathMatch:'full'},

{path:'movies'  , component:MoviesComponent},
{path:'top-rated'  , component:TopRatedMoviesComponent},
{path:'tv'  , component:TvComponent},
{path:'people'  , component:PeopleComponent},
{path:'popular' , component:PopularMoviesComponent},
{path:'upComing' , component:UpComingMoviesComponent},
{path:'trending' , component:UpComingMoviesComponent},
/*
{path:'movies-module' , loadChildren:'./movies-module/movies-module.module#MoviesModuleModule'},*/
{path:'**' , component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
