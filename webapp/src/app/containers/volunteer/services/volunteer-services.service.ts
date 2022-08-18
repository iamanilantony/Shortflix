import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VolunteerServicesService {

  constructor(public http: HttpClient, private route: Router) { }
  res = {}
  showEvent = false;
  createEvent(data:any){
    console.log(data);
    const headers ={'Content-type':'application/x-www-form-urlencoded'}
    return this.http.post('https://shotflix.herokuapp.com/api/events',data)
    .subscribe(
      res => {
        this.route.navigate(['/volunteer'])
      }
    )
  }
  updateEvent(id: string,data:any){
    console.log(id);
    return this.http.put(`https://shotflix.herokuapp.com/api/events/${id}`,data)
    .subscribe()
  }

  eventModal(){
    this.showEvent = !this.showEvent;
  }
  fetchEvent(){
    return this.http.get<any>('https://shotflix.herokuapp.com/api/events')
  }
  fetchMovies(){
    return this.http.get<any>('https://shotflix.herokuapp.com/api/movie')
  }
  fetchusers(){
    return this.http.get<any>('https://shotflix.herokuapp.com/api/users')
  }
  addGuestS(data:any){
    return this.http.post('https://shotflix.herokuapp.com/api/users',data)
    .subscribe()
  }
}
