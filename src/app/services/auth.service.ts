import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  getUserData(filename : string){
    return this.http.get(`assets/mock/${filename}.json`);
  }
}
