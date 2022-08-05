import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VolunteerServicesService {

  constructor(public http: HttpClient, private route: Router) { }
  res = {}
  createEvent(data:any){
    console.log(data);
    const headers ={'Content-type':'application/x-www-form-urlencoded'}
    return this.http.post('http://localhost:3000/api/events',data)
    .subscribe(
      res => {
        this.route.navigate(['/volunteer'])
      }
    )
  }
  fetchEvent(){
    let x = this.http.get('http://localhost:3000/api/events')
      .subscribe(
        res => {
          console.log(res,'this is getting xx4 called');
        }
      )
      console.log(x);
  }
  addGuestS(data:any){
    return this.http.post('http://localhost:3000/api/users',data)
    .subscribe()
  }
}
