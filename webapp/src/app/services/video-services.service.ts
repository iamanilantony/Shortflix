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
      return this.http.get<any>(`http://localhost:3000/api/events/${id}`)
  }

  getEventMovies(id: string) {
    return this.http.get<any>(`http://localhost:3000/api/eventmovies/${id}`)
  }

  updateStatus(id: string, status: any){
    console.log(status);
    return this.http.put<any>(`http://localhost:3000/api/movie/${id}`,status)
  }

  addGuests(id: any, guest_id: any){
    return this.http.put<any>(`http://localhost:3000/api/addguest/${id}`,guest_id)
  }
  fetchUsers(){
    return this.http.get<any>(`http://localhost:3000/api/users`)
  }
  fetchGuests(){
    return this.http.get<any>('http://localhost:3000/api/guests')
  }
  deleteEvents(id: string){
    return this.http.delete<any>(`http://localhost:3000/api/events/${id}`)
  }
  deleteMovies(id: string){
    return this.http.delete<any>(`http://localhost:3000/api/movie/${id}`)
  }
  deleteGuest(id: string, data: any){
    return this.http.put<any>(`http://localhost:3000/api/movie/${id}`,data)
  }
}
