import { Component, OnInit } from '@angular/core';
import { GetAlertsService } from '../services/get-alerts.service';
import { AlertModel } from './AlertModel';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alerts : any;
  constructor(private _alertService : GetAlertsService ) {
    this.alerts = {} as AlertModel;
    
   }

  ngOnInit(): void {
  }
  searchByCityAndDate(location: string, startDate : string , endDate: string) {
    this._alertService.getAlert(location,startDate,endDate).subscribe(response=>{
      this.alerts = response;
      })
  }

}
