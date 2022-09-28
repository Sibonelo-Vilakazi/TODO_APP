import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public tokenName: string = 'token';
  userLogin(data: any){
    return this.http.post(`${environment.apiUrl}/Users/login`, data);
  }

  userRegister(data: any){
    return this.http.post(`${environment.apiUrl}/Users/register`, data);
  }

  isLoggedIn(){
    return localStorage.getItem(this.tokenName) != null;
  }

  logout(){
    localStorage.removeItem(this.tokenName);
  }
}
