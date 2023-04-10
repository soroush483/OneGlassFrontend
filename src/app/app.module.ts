import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SaleForcastComponent } from './sale-forcast/sale-forcast.component';
import { WeatherForcastComponent } from './weather-forcast/weather-forcast.component';
import { AlertComponent } from './alert/alert.component';
import { GetAlertsService } from './services/get-alerts.service'
import { GetSalesForcastService } from './services/get-sales-forcast.service';
import { GetWeatherForcastService } from './services/get-weather-forcast.service';
import { AppErrorHandler } from './common/app-error-handler';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Route } from '@angular/router';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    SaleForcastComponent,
    WeatherForcastComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [
    GetAlertsService,
    GetSalesForcastService,
    GetWeatherForcastService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    LoginComponent,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
