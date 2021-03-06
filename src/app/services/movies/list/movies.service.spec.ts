import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MovieListService } from './movie-list.service';

describe('MoviesService', () => {
  let service: MovieListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovieListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
