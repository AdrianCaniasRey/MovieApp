import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MovieDetailService } from './movie-detail.service';

describe('MovieService', () => {
  let service: MovieDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovieDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
