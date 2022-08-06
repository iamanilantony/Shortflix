import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuestServiceService {

  constructor(public http: HttpClient, private route: Router) { }
  updatemark(revw: any) {
    return this.http.put('http://localhost:3000/api/movie/62ee6ff64a2eb30ee4911b1e', revw).subscribe();
  }
}
