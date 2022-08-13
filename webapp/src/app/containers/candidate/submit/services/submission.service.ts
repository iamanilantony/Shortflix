import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  constructor(private http: HttpClient) {}
  getEmovie() {
    return this.http.get<any>('http://localhost:3000/api/movie');
  }
}
