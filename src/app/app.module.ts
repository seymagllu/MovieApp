import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { CategoryComponent } from './category/category.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailComponent } from './movie-details/movie-detail.component';

@NgModule({
  declarations: [ // component
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    CategoryComponent,
    MovieComponent,
    MovieDetailComponent
  ],
  imports: [     //module
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],  //services
  bootstrap: [AppComponent]  //starter component
})
export class AppModule { }
