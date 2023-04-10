import { Component } from '@angular/core';
import { GetAlertsService } from './services/get-alerts.service';
import { GetSalesForcastService } from './services/get-sales-forcast.service';
import { GetWeatherForcastService } from './services/get-weather-forcast.service';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OneGlassFrontend';
  navLinks!: any[];
  activeLinkIndex = -1
  salesForcast : any;
  weatherForcast : any;
  alerts : any;
  login : any;
  /**
   *
   */
  constructor( private router: Router )
    {
      this.navLinks = [
        {
            label: 'Login',
            link: './login',
            index: 0
        }, {
            label: 'Sale Forecast',
            link: './saleforecast',
            index: 1
        }, {
            label: 'Weather Forecast',
            link: './weatherforecast',
            index: 2
        }, 
        {
          label: 'Alert',
          link: './alert',
          index: 3
      }, 
    ];
    }
    ngOnInit(): void {
      this.router.events.subscribe((res) => {
          this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
      });
    }
}
