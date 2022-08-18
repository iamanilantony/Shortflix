import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  movieId: any;
  constructor(private http: HttpClient) {}

  getEmovie() {
    return this.http.get<any>(
      `https://shotflix.herokuapp.com/api/usersmovie/${localStorage.getItem('id')}`
    );
  }

  getMovieSub(movieId: any) {
    return this.http.get<any>(`https://shotflix.herokuapp.com/api/movie/${movieId}`);
  }
}
