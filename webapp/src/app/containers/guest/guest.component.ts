import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GuestServiceService } from './services/guest-service.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  marks ={
      Overall : '',
      Direction : '',
      Story : '',
      Acting : '',
      Music : '',
      SFX : '',
      Camera : '',
      Production : '',
      _id :''
  }
  id : string = ''
  movieid : string =''
  
  GMoviedata:any;
  constructor(
    public serve:GuestServiceService,
    public getmovie:GuestServiceService
  ) {
     this.fetchgmovie();
    }

  ngOnInit(): void {
  }
  Gmodal = false;
  sguestmodal(movieId:string){
    this.Gmodal = !this.Gmodal;
    this.movieid = movieId;
    console.log(this.movieid);
  }
  cguestmodal(){
    this.Gmodal = !this.Gmodal;
  }
  addReview(rvform:NgForm):void{
    this.marks._id = localStorage.getItem('id') || '';
    console.log(this.marks);
    this.serve.updatemark(this.marks,this.movieid);
    this.Gmodal = false;
  }
  fetchgmovie(){
    return this.getmovie.getGmovie().subscribe((movies) => {
      console.log(movies);
      this.GMoviedata = Object.values(movies);
      console.log(this.GMoviedata);
    })
  }

}
