import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ViewservisesService {

  constructor(public http: HttpClient, private route: Router) { }
  getGmovie(){
    return this.http.get<any>('http://localhost:3000/api/movie');
  }
}
