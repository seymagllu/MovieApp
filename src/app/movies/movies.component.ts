import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepositoy } from '../models/movie.repositoy';

declare let alertify: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = "Film Listesi";
  movies: Movie[];
  FilteredMovies: Movie[];
  movieRepository: MovieRepositoy;

  filterText: string = "";

  constructor() {
    this.movieRepository = new MovieRepositoy();
    this.movies = this.movieRepository.getMovies();
    this.FilteredMovies = this.movies;
  }

  ngOnInit(): void {
  }

  onInputChange() {
    this.FilteredMovies = this.filterText?
      this.movies.filter(m=> m.title.indexOf(this.filterText) !== -1 ||
                         m.description.indexOf(this.filterText) !== -1): this.movies
  }

  addToList($event: any, movie: Movie) {
    if($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      alertify.success(movie.title + ' listene eklendi');
    } else {
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      alertify.error(movie.title + ' listeden çıkarıldı.')
    }
  }





}





