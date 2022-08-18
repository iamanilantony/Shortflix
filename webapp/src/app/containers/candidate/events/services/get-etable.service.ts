import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetEtableService {
  constructor(private http: HttpClient) {}

  getETable() {
    return this.http.get<any>('https://shotflix.herokuapp.com/api/events');
  }
}
