import { TestBed } from '@angular/core/testing';

import { GetWeatherForcastService } from './get-weather-forcast.service';

describe('GetWeatherForcastService', () => {
  let service: GetWeatherForcastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetWeatherForcastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
