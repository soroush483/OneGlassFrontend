import { TestBed } from '@angular/core/testing';

import { GetAlertsService } from './get-alerts.service';

describe('GetAlertsService', () => {
  let service: GetAlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
