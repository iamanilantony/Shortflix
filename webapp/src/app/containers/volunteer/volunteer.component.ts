import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VolunteerServicesService } from './services/volunteer-services.service';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})

export class VolunteerComponent implements OnInit {

  singleevent = {
    eventName: '',
    maxEntries: '',
    startDate: '',
    dueDate: '',
    desc: '',
    hostedBy: ''
}
  Guest = {
    name: '',
    email : '',
    password : '',
    role: 'guest'
  }

  EventData:any;

  constructor(private event: VolunteerServicesService ){
   }

  ngOnInit(): void {
    this.fetchEventData();
  }


  Emodal = false;
  Gmodal = false;


  fShowModal(){
      this.Emodal = !this.Emodal;
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
}
