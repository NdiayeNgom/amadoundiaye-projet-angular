import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users!: User[];

  constructor(private http: HttpClient) { }

  register(data: User){
    return this.http.post('http://127.0.0.1:8080/api/v1/auth/register', data);
  }

  login(username: string, password: string){
    return this.http.post('http://127.0.0.1:8080/api/v1/auth/login', { username: username, password: password })
  }
  
}

