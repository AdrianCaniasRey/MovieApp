// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
// Ionic
import { ViewWillEnter } from '@ionic/angular';
// RsJS
import { Observable } from 'rxjs';
// My Models
import { MovieList } from 'src/app/models/movie-list/movies-list.model';
// My Services
import { ToastService } from 'src/app/services/toast.service';
import { MovieListService } from 'src/app/services/movies/list/movie-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit, ViewWillEnter {

  movieList$: Observable<MovieList>;
  searchForm: FormGroup;
  lastScrollPosition = 0;

  constructor(
    private router: Router,
    private moviesService: MovieListService,
    private toast: ToastService
  ) { }

  ionViewWillEnter(): void {
    this.moviesService.getMovies();
  }

  ngOnInit() {
    console.log('[MovieListPage] ngOnInit: ');
    this.movieList$ = this.moviesService.retriveMovies.asObservable();
    this.moviesService.movieServiceAlerts.subscribe(alert => {
      this.presentAlert(alert);
    });
  }

  searchBy(value) {
    console.log('[MovieListPage] searchBy: ', value);
    this.moviesService.getMovies(true, value);
  }

  nextPage(event) {
    console.log('[MovieListPage] nextPage: ');
    this.moviesService.getMovies(true);
    event.target.complete();
  }

  openMovieDetail(id, title) {
    console.log('[MovieListPage] openMovieDetail: ', id);
    this.router.navigate([`movie-detail/${id}`, { title }]);
  }

  private async presentAlert(alert: string) {
    this.toast.show(alert);
  }

}
