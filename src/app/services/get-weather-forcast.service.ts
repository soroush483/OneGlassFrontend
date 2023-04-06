import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherForcastService {

  constructor(private _http:HttpClient) { }
  
  getWheather( location : string,  startDate : string,  endDate : string)
  {
    return this._http.get('https://localhost:7185/WeatherForecast?location='+location+'&startDate='+startDate+'&endDate='+endDate);
  }
}
