import { MovieDetail } from '../../models/movie-detail/movie-detail.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {

  @Input() movie: MovieDetail;
  genres: string[];
  actors: string[];
  directors: string[];
  plot: string;

  constructor() { }

  ngOnInit() {
    this.genres = this.movie.Genre.split(',').map(g => g.trim());
    this.actors = this.movie.Actors.split(',').map(a => a.trim());
    this.directors = this.movie.Director.split(',').map(d => d.trim());
    this.checkPlot();
  }

  checkPlot() {
    const invalidsPlot = ['N/A', ''];
    if (this.movie.Plot && !invalidsPlot.includes(this.movie.Plot.trim().toUpperCase())) {
      this.plot = this.movie.Plot;
    } else {
      this.plot = 'No plot available';
    }
  }

  imgError(event) {
    event.target.src = 'assets/images/no-photo.svg';
  }

}
