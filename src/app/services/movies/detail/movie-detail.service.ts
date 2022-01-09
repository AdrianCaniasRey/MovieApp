// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// RxJS
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
// Environment
import { environment } from 'src/environments/environment';
// My Models
import { MovieDetail } from 'src/app/models/movie-detail/movie-detail.model';
import { MovieDetailResponse } from 'src/app/models/movie-detail/movie-detail-responde.model';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  retrieveMovie: Subject<MovieDetail> = new Subject();
  private movie: MovieDetail;
  private lastMovieId: string;

  constructor(
    private http: HttpClient
  ) { }

  getMovie(id) {
    if (this.movie && this.lastMovieId === id) {
      console.log('[MovieDetailService] getMovie: returning cached movie');
      this.retrieveMovie.next(this.movie);
    } else {
      console.log('[MovieDetailService] getMovie: retrieving movie');
      this.retrieveFromOmdb(id);
    }
  }

  private retrieveFromOmdb(id) {
    console.log('[MovieDetailService] retrieveFromOmdb: ', id);
    this.omdbGetMovie(id).subscribe({
      next: (movie) => {
        this.movie = movie;
        this.lastMovieId = id;
        this.retrieveMovie.next(this.movie);
      },
      error: (err) => {
        console.error('[MovieDetailService] retrieveFromOmdb: ', err);
      }
    });
  }


  private omdbGetMovie(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetailResponse>(`https://www.omdbapi.com/?i=${id}&apikey=${environment.omdApiKey}`).pipe(map(res => {
      if (res.Response === 'False') {
        throw new Error(res.Error);
      }
      return this.toClient(res);
    }));
  }

  private toClient(res: MovieDetailResponse): MovieDetail {
    return {
      title: res.Title,
      year: res.Year,
      released: res.Released,
      runtime: res.Runtime,
      genre: res.Genre,
      director: res.Director,
      poster: res.Poster,
      plot: res.Plot,
      actors: res.Actors,
    };
  }
}
