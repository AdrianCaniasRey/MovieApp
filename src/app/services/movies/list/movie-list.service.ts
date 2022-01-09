// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
// Environment
import { environment } from 'src/environments/environment';
// My Models
import { MovieList } from 'src/app/models/movie-list/movies-list.model';
import { MovieListResponse } from 'src/app/models/movie-list/movie-list-response.model';


@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  private movieServiceAlerts: Subject<string> = new Subject();
  private retriveMovies: Subject<MovieList> = new Subject();

  private movieList: MovieList;
  private lastPage = 1;
  private searchFilter = {
    title: 'star',
    year: null
  };

  constructor(
    private http: HttpClient
  ) { }

  getMovies(newSearch = false, searchFilter?) {
    console.log('[MovieListService] getMovies: ', newSearch, searchFilter);
    if (searchFilter) {
      this.newSearch(searchFilter);
    }
    if (this.movieList?.movies.length && !newSearch) {
      console.log('[MovieListService] getMovies: returning cached movies');
      this.retriveMovies.next(this.movieList);
    } else {
      console.log('[MovieListService] getMovies: retrieving movies');
      this.retrieveFromOmdb(this.searchFilter.title, this.searchFilter.year);
    }
  }

  retriveMovies$(): Observable<MovieList> {
    return this.retriveMovies.asObservable();
  }

  movieServiceAlerts$(): Observable<string> {
    return this.movieServiceAlerts.asObservable();
  }

  private newSearch(searchFilter) {
    console.log('[MovieListService] newSearch: ', searchFilter);
    this.movieList = null;
    this.lastPage = 1;
    this.searchFilter = searchFilter;
  }

  private retrieveFromOmdb(title: string, year: number) {
    console.log('[MovieListService] retrieveFromOmdb: ');
    console.table({ ...this.searchFilter, page: this.lastPage });
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
        console.error('[MovieListService] retrieveFromOmdb: ', err);
        this.movieServiceAlerts.next(err.message);
      }
    });
  }

  private omdbGetMovies(title: string, year: number, page: number): Observable<MovieList> {
    const fieldYear = year ? `&y=${year}` : '';
    return this.http.get<MovieListResponse>(`https://www.omdbapi.com/?s=${title}&page=${page}${fieldYear}&
    type=movie&apikey=${environment.omdApiKey}`)
      .pipe(map(res => {
        if (res.Response === 'False') {
          throw new Error(res.Error);
        }
        return this.toClient(res);
      }));
  }

  private toClient(res: MovieListResponse): MovieList {
    console.log('[MovieListService] toClient');
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
