import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoServicesService {

  constructor(private http: HttpClient) { }

  getVideoDetails(id: string) {
    return this.http.get<any>(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBeWIY9IlWQn2uPNlK8ezJjGeoe9BKIETE&id=${id}`)
  }

  getSingleEvent(id: string) {
      return this.http.get<any>(`https://shotflix.herokuapp.com/api/events/${id}`)
  }

  getEventMovies(id: string) {
    return this.http.get<any>(`https://shotflix.herokuapp.com/api/eventmovies/${id}`)
  }

  updateStatus(id: string, status: any){
    console.log(status);
    return this.http.put<any>(`https://shotflix.herokuapp.com/api/movie/${id}`,status)
  }

  addGuests(id: any, guest_id: any){
    return this.http.put<any>(`https://shotflix.herokuapp.com/api/addguest/${id}`,guest_id)
  }
  fetchUsers(){
    return this.http.get<any>(`https://shotflix.herokuapp.com/api/users`)
  }
  fetchGuests(){
    return this.http.get<any>('https://shotflix.herokuapp.com/api/guests')
  }
  deleteEvents(id: string){
    return this.http.delete<any>(`https://shotflix.herokuapp.com/api/events/${id}`)
  }
  deleteMovies(id: string){
    return this.http.delete<any>(`https://shotflix.herokuapp.com/api/movie/${id}`)
  }
  deleteGuest(id: string, data: any){
    return this.http.put<any>(`https://shotflix.herokuapp.com/api/movie/${id}`,data)
  }
}
