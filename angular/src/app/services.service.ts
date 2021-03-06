import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private urls='http://127.0.0.1:8000/api';
  constructor(private http:HttpClient) { }

  login(data) {
    return this.http.post(`${this.urls}/login`, data);
  }
  signup(data)
  {
    return this.http.post(`${this.urls}/signup`, data);
  }


}
