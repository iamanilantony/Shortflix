import { Component, OnInit,   Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { animate, trigger, transition, state, style } from '@angular/animations';
import { VolunteerServicesService } from './services/volunteer-services.service';
import {KeyValue} from '@angular/common';
import $ from "jquery";

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

