import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form={
    name:null,
    email:null,
    password:null,
    password_confirmation:null,
  }
  public error:any = [];
constructor(private Services: ServicesService, private Token:TokenService, private router: Router) { }

  ngOnInit(): void {
  }


  signupSubmit()
  {
      this.Services.signup(this.form).subscribe
     (
        data=> this.handleResponse(data),
        error => this.handleError(error)
     );
  }

  handleError(error) {
    this.error= error.error.errors;
  }
  handleResponse(data)
  {
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/profile');
  }
}
