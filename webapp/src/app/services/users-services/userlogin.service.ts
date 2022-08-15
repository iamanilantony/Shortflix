import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(public http: HttpClient,private route:Router) { }

  loginUser(user: any){
    return this.http.post<any>('http://localhost:3000/loginauth',user)
  }

  authrequest(){
    return !!localStorage.getItem('token');
  }

  gettoken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    localStorage.removeItem('role',);
    this.route.navigate(['login'])
  }
  getUser(id : any){
    return this.http.get<any>(`http://localhost:3000/api/users/${id}`)
  }
  updateUser(id : any,body:any){
    return this.http.put(`http://localhost:3000/api/users/${id}`,body)
  }
}
