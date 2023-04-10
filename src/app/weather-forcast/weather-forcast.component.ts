import { LoginComponent } from './../login/login.component';
import { LoginService } from './../services/login.service';
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
  apitoken : any;
  loginService! :LoginComponent;
  logIn : boolean |undefined;
  constructor(
    private _WeatherService: GetWeatherForcastService,
    private _login:  LoginComponent, 
    private _loginServiec : LoginService) {

    this.weatherforcast={} as WeatherModel;
    this.logIn = _loginServiec.isLoggedIn;
   }

  ngOnInit(): void {
    
  }
  searchByCityAndDate(location: string, startDate : string , endDate: string) {
    const token= this.loginService.tokmitoken;
    this._WeatherService.getAll(location,startDate,endDate,token)
    .subscribe(response=>this.weatherforcast = response);
  }

}
