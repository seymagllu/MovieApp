import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import {Category} from "../models/category";
import {MovieRepositoy} from "../models/movie.repositoy";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title = "Film Listesi";
  movies: Movie[];
  movieRepository: MovieRepositoy;
  popularMovies: Movie[];

  filterText: string = "filterText";
 
  constructor() {
    this.movieRepository = new MovieRepositoy();
    this.movies = this.movieRepository.getMovies();
    this.popularMovies = this.movieRepository.getMovies();
  }

  ngOnInit(): void {
  }

}
