import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SaleForcastComponent } from './sale-forcast/sale-forcast.component';
import { WeatherForcastComponent } from './weather-forcast/weather-forcast.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent},
  { path: 'saleforecast', component:  SaleForcastComponent},
  { path: 'weatherforecast', component: WeatherForcastComponent},
  { path: 'alert', component: AlertComponent},
];
// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'dashboard',
//     children: [
//       { path: 'saleforecast', component: SaleForcastComponent },
//       { path: 'weatherforecast', component: WeatherForcastComponent },
//       { path: 'alert', component: AlertComponent }
//     ]
//   }
// ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
