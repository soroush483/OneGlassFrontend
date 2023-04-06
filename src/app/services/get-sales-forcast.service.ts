import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSalesForcastService {

  constructor(private _http:HttpClient) { }
  
  getSales( location : string,  startDate : string,  endDate : string)
  {
    return this._http.get('https://localhost:7185/SaleForecast?location='+location+'&startDate='+startDate+'&endDate='+endDate);
  }
}
