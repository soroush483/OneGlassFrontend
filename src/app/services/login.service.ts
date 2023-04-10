import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
isLoggedIn = false; 
private apiUrl = 'https://localhost:7185/api/Login';
//private tokenCookieName = 'myapp-token';
public token: any;

constructor(private httpClient: HttpClient) { }

login(username: string, password: string) : any {
  const loginData = {
    'userName': `${username}`,
    'password': `${password}`
  };
  
  return this.httpClient.post<any>(this.apiUrl, loginData)
  .pipe(map(response => {
    if (response && response.token) {
      this.token = response.token; // save token to the TokenService
    }
    return response; // return the response object
      }),
    catchError((error: Response) => {
      //console.log(error);
      return throwError(new AppError(error));
      
    })
  );
  }
}

