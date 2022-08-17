import {ActivatedRoute, TitleStrategy} from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { VideoServicesService } from "src/app/services/video-services.service";
import { NgForm } from "@angular/forms";
import { VolunteerServicesService } from "src/app/containers/volunteer/services/volunteer-services.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

  constructor(private route:ActivatedRoute, private video:VideoServicesService , private event:VolunteerServicesService, private router: Router) {
    this.route.params.subscribe( params => this.event_id = params);
   }

  ngOnInit(): void {
      this.fetchEvent(this.event_id.id);
      this.fetchEventMovies(this.event_id.id);
      this.fetchGuests()
    }
  
  singleevent = {
      eventName: '',
      maxEntries: '',
      startDate: Date,
      dueDate: Date,
      desc: '',
      hostedBy: '',
  }
  event_id: any;
  eventDetails: any;
  eventMovies: any;
  singleMovie: any;
  singleMovieMark: any;
  singleMovieMarks: any;
  guestList: any  ;
  selectedGuests: any;
  selectedGuest: any


  fetchEvent(event_id: any): any{
    return this.video.getSingleEvent(event_id)
      .subscribe(res => {
          this.eventDetails = res;
          this.updateFormData();
      })
    }
  fetchEventMovies(event_id: any){
    return this.video.getEventMovies(event_id)
      .subscribe(res => {
        this.eventMovies = Object.values(res)
      })
  }
  singleMovieData(movie_id: any){
    this.eventMovies.forEach((e: { _id: any; marks: any; guests: any}) => {
        if(e._id === movie_id){
          this.singleMovie = e;
          this.singleMovieMark = e.marks;
          this.selectedGuests = e.guests;
          this.findGuestName()
        }
    });
  }
  updateEvent(event_id: any, eventform : NgForm): void{
    this.event.updateEvent(event_id.id, eventform.value);
  }
  fetchGuests(){
    return this.video.fetchGuests()
      .subscribe(res => {
        this.guestList = res;
      })
  }

  setStatus(id: string, status: string){
    console.log(id,status);
    return this.video.updateStatus(id, {status})
      .subscribe()
  }

  shortlistMovie(id: string){
    return this.video.updateStatus(id,{shortListed : true}).subscribe()
  }

  addGuest(id: any, guest_id: any){
    this.video.addGuests(id , {guest_id}).subscribe()
    window.location.reload();
  }

  updateFormData(){
    this.singleevent.eventName = this.eventDetails.eventName;
    this.singleevent.maxEntries = this.eventDetails.maxEntries;
    this.singleevent.startDate = this.eventDetails.startDate ;
    this.singleevent.dueDate = this.eventDetails.dueDate;
    this.singleevent.desc = this.eventDetails.desc ;
    this.singleevent.hostedBy = this.eventDetails.hostedBy;
  }

  findGuestName(){
    this.selectedGuest = [];
    this.guestList.forEach((e: any) => {
      this.selectedGuests.map((j:any) => {
        if (e._id == j){
          this.selectedGuest.push(e);
        } 
      })
    })
  }
  deleteEvent(){
    if(confirm('Do you want to delete event')){
    this.video.deleteEvents(this.eventDetails._id).subscribe()
      this.router.navigate(['volunteer']);
  }}
  deleteMovie(id: string){
    if(confirm('Do you want to delete movie')){
    this.video.deleteMovies(id).subscribe()
    window.location.reload();
  }}
  deleteGuests(id: string){
    let guests: any[] = [];
      if(confirm('Do you want to delete guest')){
      let index = this.selectedGuest.findIndex((e: { _id: string; }) => {
        return e._id == id; 
      });
      this.selectedGuest.splice(index, 1);
      this.selectedGuest.map((e: { _id: any; }) => {
        guests.push(e._id);
      })
      this.video.deleteGuest(this.singleMovie._id,{guests}).subscribe();
      window.location.reload();
  }
}
routeMovie(id: string){
  this.router.navigate([`/movie/${id}`])
}
}