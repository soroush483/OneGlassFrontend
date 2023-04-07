import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
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
    return this.http.get<any>(url,httpOptions)
      .pipe(
        map((respones: any)=>{
            respones.json()
        }),
        catchError((error: Response) => {
          return throwError(new AppError(error));
        })
      );
  }
}