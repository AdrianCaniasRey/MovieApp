import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent implements OnInit {

  technologies = ['Angular 13', 'Ionic 6', 'Capacitor 3'];

  constructor() { }

  ngOnInit() { }

  complete(event) {
    console.log(event);
  }

}
