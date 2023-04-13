import { LoginService } from './../services/login.service';
import { SaleForecastModel } from './SaleForecastModel';
import { Component, OnInit } from '@angular/core';
import { GetSalesForcastService } from '../services/get-sales-forcast.service';

@Component({
  selector: 'app-sale-forcast',
  templateUrl: './sale-forcast.component.html',
  styleUrls: ['./sale-forcast.component.scss']
})
export class SaleForcastComponent implements OnInit {
  saleforcast :  any;
  isLoggedin : boolean | undefined;

  constructor(private _saleForcast : GetSalesForcastService, private _loginservice:LoginService ) { 
    this.saleforcast={} as SaleForecastModel;
    this.isLoggedin =  _loginservice.isLoggedIn;
  }

  ngOnInit(): void {
  }

  searchByCityAndDate(location: string, startDate : string , endDate: string) {
    this._saleForcast.getAll(location,startDate,endDate)
    .subscribe(response=>this.saleforcast = response);
  }

}
