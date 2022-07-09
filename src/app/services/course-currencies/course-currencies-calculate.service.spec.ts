import { TestBed } from '@angular/core/testing';

import { CourseCurrenciesCalculateService } from './course-currencies-calculate.service';

describe('CourseCurrenciesCalculateService', () => {
  let service: CourseCurrenciesCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseCurrenciesCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
