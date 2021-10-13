import {Movie} from "./movie";

export class MovieRepositoy {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {id: 1, title: "film 1", description: "lorem...", imageUrl: "1.jpeg", isPopular:true, datePublished: new Date(1990,10,10)},
      {id: 2, title: "film 2", description: "lorem...", imageUrl: "2.jpeg",isPopular:true, datePublished: new Date(1990,10,10)},
      {id: 3, title: "film 3", description: "lorem...", imageUrl: "3.jpeg",isPopular:true, datePublished: new Date(1990,10,10)},
      {id: 4, title: "film 4", description: "lorem...", imageUrl: "4.jpeg",isPopular:false, datePublished: new Date(1990,10,10)}
    ]
  }
  getMovies(): Movie[] {
    return this.movies;

  }
  getPopularMovies(): Movie [] {
    return this.movies.filter(i=>i.isPopular)
  }
  getMovieById(id:number): Movie {
    return this.movies.find(i=>i.id==id)
  }
}
