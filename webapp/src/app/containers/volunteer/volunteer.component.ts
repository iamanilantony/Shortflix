import { Component, OnInit,   Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { animate, trigger, transition, state, style } from '@angular/animations';
import { VolunteerServicesService } from './services/volunteer-services.service';
import { VideoServicesService } from 'src/app/services/video-services.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
  animations: [
    trigger('dialog',[
      transition('void => *',[
        style({ transform: 'scale3d(.3,.3,.3)' }),
        animate(250)
      ]),
      transition('* => void',[
        animate(200, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
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


  constructor(private event: VolunteerServicesService, private video:VideoServicesService ){
   }

  ngOnInit(): void {
    this.fetchEventData();
    this.fetchMoviesData();
    this.fetchUsersData()
    // this.fetchMovieDataApi('EAyo3_zJj5c');

  }
  Emodal = false;
  Gmodal = false;


  fShowModal(){
    this.Emodal = !this.Emodal;
    this.visibleChange.emit(this.Emodal);
  }
  sguestmodal(){
    this.Gmodal = !this.Gmodal;
  }
  addEvent(eventform : NgForm): void{
    this.event.createEvent(eventform.value);
    this.Emodal = false;
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

      }
    )
  }
  
  addGuest(gData : NgForm) : void{
    console.log(gData.value);
    this.event.addGuestS(gData.value);
    this.Gmodal = false;
  }
  flibrary(){
    
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

