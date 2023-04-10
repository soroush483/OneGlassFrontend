import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject('URL') private apiUrl: string, private http: HttpClient) { }

  getAll(location: string, startDate: string, endDate: string,apiToken?: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + apiToken
      })
    };
    const url = `${this.apiUrl}?location=${location}&startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<any>(url, httpOptions)
    .pipe(
      catchError((error: Response) => {
        //console.log(error);
        return throwError(new AppError(error));
        
      })
    );
  }

  // login(username: string, password: string): Observable<string> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   const body = {
  //     userName: username,
  //     password: password
  //   };
  //   const url = `${this.apiUrl}/Login`;
  //   return this.http.post<any>(url, body, httpOptions)
  //   .pipe(
  //     catchError((error: any) => {
  //       return throwError(new AppError(error));
  //     }
  //     ),
  //     map(response => response)
  //   );
  // }
}