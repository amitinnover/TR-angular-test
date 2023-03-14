import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers: any = new HttpHeaders();

  constructor(private httpClient: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  getLogin(loginDetail){
    return this.httpClient.post(environment.API_URL + 'authaccount/login',
    loginDetail,
    {
      headers: this.headers,
      observe: 'response'
    })
  }
}
