import { Component, OnInit } from '@angular/core';
import { GetWeatherForcastService } from '../services/get-weather-forcast.service';
import { WeatherModel } from './WeatherModel';

@Component({
  selector: 'app-weather-forcast',
  templateUrl: './weather-forcast.component.html',
  styleUrls: ['./weather-forcast.component.scss']
})
export class WeatherForcastComponent implements OnInit {
  weatherforcast :  any;

  constructor(private _WeatherService: GetWeatherForcastService) {
    this.weatherforcast={} as WeatherModel;
   }

  ngOnInit(): void {
    
  }
  searchByCityAndDate(location: string, startDate : string , endDate: string,apiToken: string) {
    this._WeatherService.getAll(location,startDate,endDate,apiToken)
    .subscribe(response=>this.weatherforcast = response);
  }

}
