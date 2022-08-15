import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuestServiceService {

  constructor(public http: HttpClient, private route: Router) { }
  updatemark(revw : any,id : string) {
    console.log(id);
    return this.http.put(`http://localhost:3000/api/movie/marks/${id}`, revw).subscribe();
  }
  getGmovie(){
    return this.http.get<any>('http://localhost:3000/api/movie');
  }
  getg1movie(id : string){
    return this.http.get<any>(`http://localhost:3000/api/movie/${id}`);
  }
}
