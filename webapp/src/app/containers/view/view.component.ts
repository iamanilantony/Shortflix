import { Component, OnInit } from '@angular/core';
import { ViewservisesService } from './servises/viewservises.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  GMoviedata:any;
  GMoviedatan: any;
  actionMovies: any;
  comedyMovies: any;
  docuMovies: any;
  dramaMovies: any;
  musicalMovies: any;
  romanticMovies:any;
  scifiMovies: any;
  thrillerMovies:any;
  
  constructor(public getmovie:ViewservisesService) { 
    this.fetchgmovie();
  }

  ngOnInit(): void {
  }
  fetchgmovie(){
    return this.getmovie.getGmovie().subscribe((movies:any) => {
      console.log(movies);
      this.GMoviedata = Object.values(movies);
      this.GMoviedatan = movies;
      console.log(this.GMoviedatan);

      this.actionMovies=[]
      this.comedyMovies=[]
      this.docuMovies=[]
      this.dramaMovies=[]
      this.musicalMovies=[]
      this.romanticMovies=[]
      this.scifiMovies=[]
      this.thrillerMovies=[]

      this.GMoviedatan.forEach((movieb: { genre: string; })=>{
          console.log(movieb,"movieb")
          if(movieb.genre=="Action & Adventure") {
            this.actionMovies.push(movieb)
          }
          if(movieb.genre=="Comedy") {
            this.comedyMovies.push(movieb)
          }
          if(movieb.genre=="Documentary") {
            this.docuMovies.push(movieb)
          }
          if(movieb.genre=="Drama") {
            this.dramaMovies.push(movieb)
          }
          if(movieb.genre=="Musical") {
            this.musicalMovies.push(movieb)
          }
          if(movieb.genre=="Romantic") {
            this.romanticMovies.push(movieb)
          }
          if(movieb.genre=="Scifi") {
            this.scifiMovies.push(movieb)
          }
          if(movieb.genre=="Thriller") {
            this.thrillerMovies.push(movieb)
          }
      })
    })
  }
}
