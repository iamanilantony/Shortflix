import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoServicesService {

  constructor(private http: HttpClient) { }

  getVideoDetails(id: string) {
    console.log('control ets here');
    return this.http.get<any>(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyBeWIY9IlWQn2uPNlK8ezJjGeoe9BKIETE&id=${id}`)
  }
}
