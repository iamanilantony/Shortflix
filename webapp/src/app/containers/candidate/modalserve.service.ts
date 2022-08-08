import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ModalserveService {
  showDialog = false;
  event_id= ''
  constructor(private http: HttpClient) {}

  sendmovieToBackend(movie: any) {
    console.log(movie);
    return this.http.post('http://localhost:3000/api/movie', movie).subscribe();
  }
}
