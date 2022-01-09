import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MovieListPage } from './movie-list.page';
import { MovieSearchFormModule } from 'src/app/components/movie-search-form/movie-search-form.module';
import { MovieSearchFormComponent } from 'src/app/components/movie-search-form/movie-search-form.component';
import { MovieCardModule } from 'src/app/components/movie-card/movie-card.module';
import { MovieCardComponent } from 'src/app/components/movie-card/movie-card.component';
import { MovieListService } from 'src/app/services/movies/list/movie-list.service';
import { of } from 'rxjs';

import { MOVIE_LIST } from '../../../../../spec/response/movie-list';

describe('MovieListPage', () => {
  let component: MovieListPage;
  let fixture: ComponentFixture<MovieListPage>;

  let movieListServiceSpy: jasmine.SpyObj<MovieListService>;

  beforeEach(waitForAsync(() => {
    movieListServiceSpy = jasmine.createSpyObj('MovieListService', ['retriveMovies$', 'movieServiceAlerts$']);
    movieListServiceSpy.retriveMovies$.and.returnValue(of(MOVIE_LIST));
    movieListServiceSpy.movieServiceAlerts$.and.returnValue(of('Error'));
    TestBed.configureTestingModule({
      declarations: [
        MovieListPage,
        MovieSearchFormComponent,
        MovieCardComponent
      ],
      imports: [
        MovieSearchFormModule,
        MovieCardModule,
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: MovieListService, useValue: movieListServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get 3 movies when initialized', () => {
    const cardList = fixture.nativeElement.querySelectorAll('app-movie-card');
    expect(cardList.length).toBe(3);
  });

  it('should get 3 movie when search', () => {
    const searchForm = fixture.nativeElement.querySelector('app-movie-search-form');
    searchForm.dispatchEvent(new CustomEvent('submit', { detail: { search: 'star' } }));
    fixture.detectChanges();
    const cardList = fixture.nativeElement.querySelectorAll('app-movie-card');
    expect(cardList.length).toBe(3);
  });
});
