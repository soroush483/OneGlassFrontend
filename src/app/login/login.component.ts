import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public tokmitoken: any;
  showValidationError: boolean | undefined;
  token: any;
  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

onSubmit(username: string, password: string) {
  this.loginService.login(username, password).subscribe(
    (response: any) => {
      if(response)
      {
        this.token = response;
        this.loginService.isLoggedIn = true;
        username = '';
        password = '';
      }
    },
    (error: any) => {
      console.log(error);
    }
  );
}

}
