import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAlertsService {

  constructor(private _http : HttpClient) { }
  
  getAlert( location : string,  startDate : string,  endDate : string)
  {
    return this._http.get('https://localhost:7185/Alert?location='+location+'&startDate='+startDate+'&endDate='+endDate);
  }
}
