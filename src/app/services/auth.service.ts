import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:7016/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel){
    return this.httpClient.post(this.apiUrl + "login",user)
  }
}
