import { TestBed } from '@angular/core/testing';

import { GetSalesForcastService } from './get-sales-forcast.service';

describe('GetSalesForcastService', () => {
  let service: GetSalesForcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSalesForcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
