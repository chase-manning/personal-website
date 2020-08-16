import { TestBed } from '@angular/core/testing';

import { GoogleOptimizeService } from './google-optimize.service';

describe('GoogleOptimizeService', () => {
  let service: GoogleOptimizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleOptimizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
