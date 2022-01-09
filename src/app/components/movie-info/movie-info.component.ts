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
    this.genres = this.movie.genre.split(',').map(g => g.trim());
    this.actors = this.movie.actors.split(',').map(a => a.trim());
    this.directors = this.movie.director.split(',').map(d => d.trim());
    this.checkPlot();
  }

  checkPlot() {
    const invalidsPlot = ['N/A', ''];
    if (this.movie.plot && !invalidsPlot.includes(this.movie.plot.trim().toUpperCase())) {
      this.plot = this.movie.plot;
    } else {
      this.plot = 'No plot available';
    }
  }

  imgError(event) {
    event.target.src = 'assets/images/no-photo.svg';
  }

}
