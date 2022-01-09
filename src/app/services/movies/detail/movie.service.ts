import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MovieDetail } from 'src/app/models/movie-detail/movie-detail.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  retrieveMovie: Subject<MovieDetail> = new Subject();
  private movie: MovieDetail;
  private lastMovieId: string;

  constructor(
    private http: HttpClient
  ) { }

  getMovie(id) {
    if (this.movie && this.lastMovieId === id) {
      console.log('returning cached movie');
      this.retrieveMovie.next(this.movie);
    } else {
      console.log('fetching new movie');
      this.retrieveFromOmdb(id);
    }
  }

  private retrieveFromOmdb(id) {
    this.omdbGetMovie(id).subscribe({
      next: (res) => {
        this.movie = res;
        this.lastMovieId = id;
        this.retrieveMovie.next(this.movie);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


  private omdbGetMovie(id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`https://www.omdbapi.com/?i=${id}&apikey=${environment.omdApiKey}`).pipe(map(res => {
      if (res.Response === 'False') {
        throw new Error(res.Error);
      }
      return res;
    }));
  }
}
