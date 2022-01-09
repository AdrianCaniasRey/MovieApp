import { ViewDidEnter } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetail } from 'src/app/models/movie-detail/movie-detail.model';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailService } from 'src/app/services/movies/detail/movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit, ViewDidEnter {

  movie$: Observable<MovieDetail>;
  title: string;
  private movieId: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieDetailService
  ) {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.title = this.route.snapshot.paramMap.get('title');
  }

  ionViewDidEnter(): void {
    this.movieService.getMovie(this.movieId);
  }

  ngOnInit() {
    this.movie$ = this.movieService.retrieveMovie$();
  }

  imgError(event) {
    event.target.src = 'assets/images/no-photo.svg';
  }

}
