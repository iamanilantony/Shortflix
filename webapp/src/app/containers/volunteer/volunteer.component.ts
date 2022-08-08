import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VolunteerServicesService } from './services/volunteer-services.service';
import {KeyValue} from '@angular/common';
import $ from "jquery";

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})

export class VolunteerComponent implements OnInit {

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
  file1:any;
  file2:any;
  imagesData:any;
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
    this.imagesData = null
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

  fileUpload(event: Event){
    console.log('This is getting called',event.target)
    const file:any = event.target;
    this.image.patchValue({image: file})
    const allowedMimeTypes = ["image/png","image/jpg","image/jpeg"];
    if (file && allowedMimeTypes.includes(file.type)){
      const reader = new FileReader();
      reader.onload = () => {
        this.imagesData= reader.result as string;
      }
      reader.readAsDataURL(file);
    }
  }

  // fileUpload(event:any){
  //   this.file1 = event.target.value;
  //   this.file2 = event.target.files[0];
  // this.imagesPreview = (event:any,placeToInsertImagePreview:any) => {
  //   console.log(this.file1) ;
  //   console.table(this.file2);
  //   if(this.file1){
  //     let reader = new FileReader();
  //     reader.onload = ((event) => {
  //       $($.parseHTML("<img>"))
  //         .attr("src", this.file1)
  //         .appendTo(placeToInsertImagePreview);
  //     });
  //     reader.readAsDataURL(this.file1)
  //   }
  //  }
  //  $("#input-files").on("change",() => {
  //     this.imagesPreview(this,"div.preview-images")
  //  })
  // }
}

