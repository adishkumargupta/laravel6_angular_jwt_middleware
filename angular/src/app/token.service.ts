import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login : 'http://127.0.0.1:8000/api/login',
    signup : 'http://127.0.0.1:8000/api/signup'
  }
  constructor() { }

  handle(token)
  {
      this.set(token);

  }

  set(token){
    localStorage.setItem('token',token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  isValid() {
    const token=this.get();
    if(token) {
      const payload = this.payload(token);
      if(payload){
       return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
      return JSON.parse(atob(token.split('.')[1]));
  }

  loggedIn()
  {
    return this.isValid();
  }
}
