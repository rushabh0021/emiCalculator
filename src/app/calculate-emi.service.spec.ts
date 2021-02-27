import { TestBed } from '@angular/core/testing';

import { CalculateEmiService } from './calculate-emi.service';

describe('CalculateEmiService', () => {
  let service: CalculateEmiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateEmiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
