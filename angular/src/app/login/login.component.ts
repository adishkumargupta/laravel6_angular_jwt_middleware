import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form={
      email:null,
      password:null
    }
    public error = null;
  constructor(private Services:ServicesService,private Token:TokenService, private router:Router, private Auth: AuthService) { }

  ngOnInit(): void {
  }

  loginSubmit()
  {
     this.Services.login(this.form).subscribe
     (
        data=> this.handleResponse(data),
        error => this.handleError(error)
     );
  }

  handleResponse(data)
  {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
  handleError(error) {
    this.error= error.error.error;
  }

}
