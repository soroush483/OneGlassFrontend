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

  constructor(private _saleForcast : GetSalesForcastService) { 
    this.saleforcast={} as SaleForecastModel;
  }

  ngOnInit(): void {
   
  }
  searchByCityAndDate(location: string, startDate : string , endDate: string) {
    this._saleForcast.getSales(location,startDate,endDate).subscribe(response=>{
      this.saleforcast = response;
      })
  }

}
