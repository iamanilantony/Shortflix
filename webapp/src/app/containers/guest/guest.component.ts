import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { data } from 'jquery';
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
  movieName : string =''
  MarKs : []
  roleid:string =localStorage.getItem('id') || '';
  exmark:any
  
  
  GMoviedata:any;
  GMoviedatam:any;
  GMoviedatac:any;

  moviedata1:any;


  constructor(
    public serve:GuestServiceService,
    public getmovie:GuestServiceService
  ) {
     this.fetchgmovie();
    }

  ngOnInit(): void {
  }
  Gmodal = false;
  Gmodalm = false;
  sguestmodal(movieId:string){
    this.Gmodal = !this.Gmodal;
    this.movieid = movieId;
    console.log(this.movieid);
  }
  cguestmodal(rvform:NgForm){
    this.Gmodal = !this.Gmodal;
    rvform.reset();
  }
  sguestmodalmarks(movieId:string,moviename:string,marKs:[]){
    this.Gmodalm = !this.Gmodalm;
    this.movieid = movieId;
    console.log(this.movieid);
    this.movieName = moviename;
    console.log(this.movieName);
    this.MarKs = marKs;
    console.log(this.MarKs);

    // to fetch one movie data
    return this.getmovie.getg1movie(this.movieid).subscribe((movies1:any) => {
      console.log(movies1);
      this.moviedata1=movies1;
      this.moviedata1.marks1=movies1.marks;
      console.log(this.moviedata1.marks1,"yeahbouuuuuy");
      this.roleid=localStorage.getItem('id') || '';
      
      for(var i in this.moviedata1.marks1){
        console.log(this.moviedata1.marks1[i],i);
        if(this.moviedata1.marks1[i]._id == this.roleid){
          console.log(this.moviedata1.marks1[i],"if works");
          this.exmark=this.moviedata1.marks1[i];
          console.log(this.exmark,"hoooraaaaay");
        }
      }
    })

  }
  cguestmodalmarks(){
    this.Gmodalm = !this.Gmodalm;
  }
  addReview(rvform:NgForm):void{
    this.marks._id = localStorage.getItem('id') || '';
    console.log(this.marks);
    this.serve.updatemark(this.marks,this.movieid);
    this.Gmodal = false;
    rvform.reset();
  }
  fetchgmovie(){
    return this.getmovie.getGmovie().subscribe((movies) => {
      console.log(movies);
      this.GMoviedata = Object.values(movies);
      this.GMoviedatam = Object.values(movies);
      console.log(this.GMoviedatam,"hiiiiiiiiiiiiiiiii");
      for(var i in this.GMoviedatam){
        console.log(this.GMoviedatam[i],"loop works");
        console.log(this.GMoviedatam[i].marks,"loop works");

        for(let j=0; j<3; j++){
          console.log(this.GMoviedatam[i].marks[j],j,this.roleid,"loop loop works");
          if(this.GMoviedatam[i].marks[j]._id == this.roleid){
            // console.log(this.GMoviedatam[i],"loop ffworks");
            // this.GMoviedatac[i]=this.GMoviedatam[i];

            // this.GMoviedatac[i]=this.GMoviedatam[i];
            console.log(this.GMoviedatac[i],"loop ffworks");

            console.log("finally");
          }

        }
      }
      console.log(this.GMoviedatac,"congrats");
        
    })
  }

}
