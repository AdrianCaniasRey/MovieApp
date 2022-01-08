import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-search-form',
  templateUrl: './movie-search-form.component.html',
  styleUrls: ['./movie-search-form.component.scss'],
})
export class MovieSearchFormComponent implements OnInit {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  searchForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  sendResponse() {
    if (this.searchForm.valid) {
      this.formSubmit.emit(this.searchForm.value);
    }
  }

  private buildForm() {
    this.searchForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      year: new FormControl(''),
    });
  }

}
