import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import { CategoryComponent } from './category/category.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MovieDetailComponent } from './movie-details/movie-detail.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';

@NgModule({
  declarations: [ // component
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    CategoryComponent,
    MovieComponent,
    MovieDetailComponent,
    SummaryPipe,
    MovieFilterPipe
  ],
  imports: [     //module
    BrowserModule,
    FormsModule,
    AppRoutingModule
    
  ],
  providers: [],  //services
  bootstrap: [AppComponent]  //starter component
})
export class AppModule { }
