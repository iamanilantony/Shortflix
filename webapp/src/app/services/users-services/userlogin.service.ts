import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(public http: HttpClient,private route:Router) { }

  loginUser(user: any){
    return this.http.post<any>('https://shotflix.herokuapp.com/loginauth',user)
  }

  authrequest(){
    return !!localStorage.getItem('token');
  }

  gettoken(){
    return localStorage.getItem('token');
  }

  volAuth(){
    let x= localStorage.getItem('role');
    if (x === 'volunteer') return true;
    else return false;
  }

  guesAuth(){
    let x= localStorage.getItem('role');
    if (x === 'guest') return true;
    else return false;
  }

  candAuth(){
    let x= localStorage.getItem('role');
    if (x === 'candidate') return true;
    else return false;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    localStorage.removeItem('role',);
    this.route.navigate(['login'])
  }
  getUser(id : any){
    return this.http.get<any>('https://shotflix.herokuapp.com/api/users',id)
  }

}
