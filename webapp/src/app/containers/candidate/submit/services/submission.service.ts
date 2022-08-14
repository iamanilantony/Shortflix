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
      `http://localhost:3000/api/usersmovie/${localStorage.getItem('id')}`
    );
  }

  getMovieSub(movieId: any) {
    return this.http.get<any>(
      `http://localhost:3000/api/movie/62f889cff3a9a052d074676f`
    );
  }
}
