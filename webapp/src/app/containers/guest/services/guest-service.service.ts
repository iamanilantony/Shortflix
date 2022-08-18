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
    return this.http.put(`https://shotflix.herokuapp.com/api/movie/marks/${id}`, revw).subscribe();
  }
  getGmovie(){
    return this.http.get<any>('https://shotflix.herokuapp.com/api/movie');
  }
  getg1movie(id : string){
    return this.http.get<any>(`https://shotflix.herokuapp.com/api/movie/${id}`);
  }
}
