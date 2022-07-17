import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(public http: HttpClient) { }

  loginUser(user: any){
    return this.http.post('http://localhost:3000/loginauth',user)
  }

}
