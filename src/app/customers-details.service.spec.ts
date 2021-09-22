import { TestBed } from '@angular/core/testing';

import { CustomersDetailsService } from './customers-details.service';

describe('CustomersDetailsService', () => {
  let service: CustomersDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
