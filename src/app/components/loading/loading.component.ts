import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/lottie/loading.json',
  };

  constructor() { }

  ngOnInit() { }

}
