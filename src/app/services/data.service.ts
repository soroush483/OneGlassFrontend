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
        return throwError(new AppError(error)); 
      })
    );
  }
}