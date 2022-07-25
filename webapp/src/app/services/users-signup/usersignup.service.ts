import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersignupService {

  constructor(public http: HttpClient,private route:Router) { }

  adduser(user:any){
    console.log(this.http);
    const headers ={'Content-type':'application/x-www-form-urlencoded'}
    return this.http.post('http://localhost:3000/api/users',user)
    .subscribe(              
      res=>{
            this.route.navigate(['/login'])
          }
    )    
  }
}
