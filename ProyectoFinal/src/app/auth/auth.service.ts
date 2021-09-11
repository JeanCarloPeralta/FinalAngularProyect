import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public login(username: String, password: String){
    const user = {
      username, password
    };
    return this.http.post('https://u-task-api.herokuapp.com/login', user);
  }

  constructor(private http: HttpClient) { }
}