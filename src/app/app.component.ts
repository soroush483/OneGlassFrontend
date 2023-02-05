import { Component } from '@angular/core';
import { GetAlertsService } from './get-alerts.service';
import { GetSalesForcastService } from './get-sales-forcast.service';
import { GetWeatherForcastService } from './get-weather-forcast.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OneGlassFrontend';
  salesForcast : any;
  weatherForcast : any;
  alerts : any;
  /**
   *
   */
  constructor(
    private _alert : GetAlertsService,
    private _saleForcast : GetSalesForcastService,
    private _weatherForcast : GetWeatherForcastService) {}
}
