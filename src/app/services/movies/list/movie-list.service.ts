import { MovieResponseList } from './../../../models/movie-list/movie-list-response.model';
import { MovieList } from 'src/app/models/movie-list/movies-list.model';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  retriveMovies: Subject<MovieList> = new Subject();
  movieServiceAlerts: Subject<string> = new Subject();

  private movieList: MovieList;
  private lastPage = 1;
  private searchFilter = {
    title: 'star',
    year: null
  };

  constructor(
    private http: HttpClient
  ) { }

  newSearch(value) {
    this.movieList = null;
    this.lastPage = 1;
    this.searchFilter = value;
  }

  getMovies(newSearch = false) {
    if (this.movieList?.movies.length && !newSearch) {
      console.log('returning cached list');
      this.retriveMovies.next(this.movieList);
    } else {
      console.log('fetching new list');
      this.retrieveFromOmdb(this.searchFilter.title, this.searchFilter.year);
    }
  }
  private retrieveFromOmdb(title: string, year: number) {
    console.log('retrieving from omdb on page: ', this.lastPage);
    this.omdbGetMovies(title, year, this.lastPage).subscribe({
      next: (res) => {
        this.movieList = {
          movies: this.movieList?.movies ? [...this.movieList.movies, ...res.movies] : res.movies,
          totalResults: res.totalResults
        };
        ++this.lastPage;
        this.retriveMovies.next(this.movieList);
      },
      error: (err) => {
        console.error(err);
        this.movieServiceAlerts.next(err.message);
      }
    });
  }

  private omdbGetMovies(title: string, year: number, page: number): Observable<MovieList> {
    const fieldYear = year ? `&y=${year}` : '';
    return this.http.get<MovieResponseList>(`https://www.omdbapi.com/?s=${title}&page=${page}${fieldYear}&
    type=movie&apikey=${environment.omdApiKey}`)
      .pipe(map(res => {
        if (res.Response === 'False') {
          throw new Error(res.Error);
        }
        return this.toClient(res);
      }));
  }

  private toClient(res: MovieResponseList): MovieList {
    return {
      movies: res.Search.map(item => ({
        title: item.Title,
        year: item.Year,
        imdbID: item.imdbID,
        poster: item.Poster
      })),
      totalResults: res.totalResults
    };
  }
}
