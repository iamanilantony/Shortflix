import { Component, OnInit,   Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { animate, trigger, transition, state, style } from '@angular/animations';
import { VolunteerServicesService } from './services/volunteer-services.service';
import { VideoServicesService } from 'src/app/services/video-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
})

export class VolunteerComponent implements OnInit {
  @Output() visibleChange : EventEmitter<boolean> = new EventEmitter<boolean>(); 

  image: any;
  EventData:any;
  videoObject: any;
  MoviesData: any;
  UsersData: any;
  TotalEvents: any;
  TotalGuests: any;
  TotalMovie: any;
  ShortListedMovies: any;
  nonShortListed: any;

  singleevent = {
    eventName: '',
    maxEntries: '',
    startDate: '',
    dueDate: '',
    desc: '',
    hostedBy: '',
}
  Guest = {
    name: '',
    email : '',
    password : '',
    role: 'guest'
  }


  constructor(private event: VolunteerServicesService, private video:VideoServicesService , private router:Router){
   }

  ngOnInit(): void {
    this.fetchEventData();
    this.fetchMoviesData();
    this.fetchUsersData()
    // this.fetchMovieDataApi('EAyo3_zJj5c');

  }
  Emodal = false;
  Gmodal = false;

  addEvent(eventform : NgForm): void{
    this.event.createEvent(eventform.value);
    eventform.reset();
  }
  fetchEventData(): any{
    return this.event.fetchEvent()
    .subscribe(
      res => {
        this.EventData = Object.values(res);
        this.TotalEvents = this.EventData.length;
      }
    )
  }
  fetchUsersData(): any{
    return this.event.fetchusers()
      .subscribe(
        res => {
            this.UsersData = Object.values(res);
            this.TotalGuests = this.UsersData.length;
        }
        )
  }

  fetchMoviesData(): any{
    return this.event.fetchMovies()
    .subscribe(
      res => {
        this.MoviesData = Object.values(res);
        this.TotalMovie = this.MoviesData.length;
        this.ShortListedMovies = [];
        this.nonShortListed = []
        this.MoviesData.map((e: { shortListed: any; }) => {
          if(e.shortListed) {
            this.ShortListedMovies.push(e)
          }
          else{
            this.nonShortListed.push(e)
          } 
        })
        this.MoviesData.length = 5
        console.log(this.nonShortListed);
      }
    )
  }
  
  addGuest(gData : NgForm) : void{
    console.log(gData.value);
    this.event.addGuestS(gData.value);
    gData.reset();
  }
  routeMovie(id: string){
    this.router.navigate([`/movie/${id}`])
  }
  routeEvent(id: string){
    this.router.navigate([`/event/${id}`])
  }
  // fetchMovieDataApi(url: string): any{
  //   return this.video.getVideoDetails(url)
  //     .subscribe(
  //       res => {
  //         this.videoObject = res;
  //         console.log(this.videoObject)
  //       }
  //     )
  // }

}

