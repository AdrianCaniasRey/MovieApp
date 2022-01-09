import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { MOVIE_DETAIL } from 'spec/response/movie-detail';
import { MovieDetailService } from 'src/app/services/movies/detail/movie-detail.service';

import { MovieDetailPage } from './movie-detail.page';
import { MovieInfoComponent } from 'src/app/components/movie-info/movie-info.component';
import { MovieInfoModule } from 'src/app/components/movie-info/movie-info.module';

fdescribe('MovieDetailPage', () => {
  let component: MovieDetailPage;
  let fixture: ComponentFixture<MovieDetailPage>;

  let movieDetailServiceSpy: jasmine.SpyObj<MovieDetailService>;

  beforeEach(waitForAsync(() => {
    movieDetailServiceSpy = jasmine.createSpyObj('MovieDetailService', ['retrieveMovie$']);
    movieDetailServiceSpy.retrieveMovie$.and.returnValue(of(MOVIE_DETAIL));
    TestBed.configureTestingModule({
      declarations: [
        MovieDetailPage,
        MovieInfoComponent
      ],
      imports: [
        MovieInfoModule,
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get movie when initialized', () => {
    const movieDetailComponent = fixture.nativeElement.querySelectorAll('app-movie-info');
    expect(movieDetailComponent).toBeTruthy();
  });
});
