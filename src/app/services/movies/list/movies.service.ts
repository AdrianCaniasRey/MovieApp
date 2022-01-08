import { MovieList } from 'src/app/models/movies-list.model';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

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
    if (this.movieList?.Search.length && !newSearch) {
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
          Search: this.movieList?.Search ? [...this.movieList.Search, ...res.Search] : res.Search,
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
    return this.http.get<MovieList>(`https://www.omdbapi.com/?s=${title}&page=${page}${fieldYear}&
    type=movie&apikey=${environment.omdApiKey}`)
      .pipe(map(res => {
        if (res.Response === 'False') {
          throw new Error(res.Error);
        }
        return res;
      }));
  }
}
