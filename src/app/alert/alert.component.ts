import { Component, OnInit } from '@angular/core';
import { GetAlertsService } from '../services/get-alerts.service';
import { AlertModel } from './AlertModel';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alerts : any;
  logIn : boolean | undefined;

  constructor(private _alertService : GetAlertsService, private _loginservice:LoginService ) {
    this.alerts = {} as AlertModel;
    this.logIn = _loginservice.isLoggedIn;
   }

  ngOnInit(): void {
  }

  searchByCityAndDate(location: string, startDate : string , endDate: string) {
    this._alertService.getAll(location,startDate,endDate)
    .subscribe(response=>this.alerts = response);
  }

}
