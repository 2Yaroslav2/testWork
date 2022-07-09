import { TestBed } from '@angular/core/testing';

import { CourseCurrenciesPostService } from './course-currencies-post.service';

describe('CourseCurrenciesPostService', () => {
  let service: CourseCurrenciesPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCurrenciesPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
