import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ModalserveService {
  showDialog = false;
  event_id = '';
  eventName: string;
  // CARDS INFO
  TotalEvents = 0;
  CurrentEvents = 0;
  YourSubmission = 1;
  PendingSubmission = 0;

  constructor(private http: HttpClient) {}

  sendmovieToBackend(movie: any) {
    return this.http.post('http://localhost:3000/api/movie', movie).subscribe();
    console.log(movie);
  }
  sendUpdatedMovieToBackend(Umovie: any, movieId: any) {
    // console.log(movieId, Umovie, 'UPDATED MOVIES');
    return this.http.put(`http://localhost:3000/api/movie/${movieId}`, Umovie);
  }
  deleteEntryRequest(movie: any, movieId: any) {
    console.log(movie);
    return this.http.put(`http://localhost:3000/api/movie/${movieId}`, movie);
  }
}
