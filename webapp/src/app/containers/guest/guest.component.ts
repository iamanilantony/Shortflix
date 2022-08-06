import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuestServiceService } from './services/guest-service.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  mark :any=[]
  movie = {
    marks :{
      Overall : '',
      Direction : '',
      Story : '',
      Acting : '',
      Music : '',
      SFX : '',
      Camera : '',
      Production : ''
    }
  }
  constructor(public serve:GuestServiceService) { }

  ngOnInit(): void {
  }
  Gmodal = false;
  sguestmodal(){
    this.Gmodal = !this.Gmodal;
  }
  addReview(rvform:NgForm):void{
    // console.log(rvform.value);
    this.mark=[]
    this.mark.push(rvform.value.Overall)
    this.mark.push(rvform.value.Direction)
    this.mark.push(rvform.value.Story)
    this.mark.push(rvform.value.Acting)
    this.mark.push(rvform.value.Music)
    this.mark.push(rvform.value.SFX)
    this.mark.push(rvform.value.Camera)
    this.mark.push(rvform.value.Production)
    this.movie.marks=this.mark
    console.log(this.movie);
    console.log(this.mark);
    this.serve.updatemark(this.mark);
    this.Gmodal = false;
  }
}
