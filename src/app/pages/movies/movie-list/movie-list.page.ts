import { ToastService } from './../../../services/toast.service';
import { MovieSearchFormComponent } from './../../../components/movie-search-form/movie-search-form.component';
import { MovieList } from 'src/app/models/movie-list/movies-list.model';
import { MovieListService } from 'src/app/services/movies/list/movie-list.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ViewWillEnter } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit, ViewWillEnter {

  @ViewChild(MovieSearchFormComponent) searchBar: MovieSearchFormComponent;

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
    this.movieList$ = this.moviesService.retriveMovies.asObservable();
    this.moviesService.movieServiceAlerts.subscribe(alert => {
      this.presentAlert(alert);
    });
  }

  searchBy(value) {
    this.moviesService.getMovies(true, value);
  }

  nextPage(event) {
    this.moviesService.getMovies(true);
    event.target.complete();
  }

  openMovieDetail(id, title) {
    this.router.navigate([`movie-detail/${id}`, { title }]);
  }


  private async presentAlert(alert: string) {
    this.toast.show(alert);
  }

}
