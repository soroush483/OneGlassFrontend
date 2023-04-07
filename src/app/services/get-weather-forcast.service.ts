import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherForcastService extends DataService {
  
  constructor( http: HttpClient) { 
    super( 'https://localhost:7185/WeatherForecast',http);
  }
}
