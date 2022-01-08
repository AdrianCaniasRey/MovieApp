import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() title: string;
  @Input() year: string;

  constructor() { }

  ngOnInit() { }

  imgErrorHandler(event) {
    event.target.src = 'assets/images/no-photo.svg';
  }

}
