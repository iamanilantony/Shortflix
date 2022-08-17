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
  adventureMovies: any;
  musicalMovies: any;
  scifiMovies: any;
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
      this.adventureMovies=[]
      this.musicalMovies=[]
      this.scifiMovies=[]

      this.GMoviedatan.forEach((movieb: { genre: string; })=>{
          console.log(movieb,"movieb")
          if(movieb.genre=="Action") {
            this.actionMovies.push(movieb)
          }
          if(movieb.genre=="Comedy") {
            this.comedyMovies.push(movieb)
          }
          if(movieb.genre=="Documentry") {
            this.docuMovies.push(movieb)
          }
          if(movieb.genre=="Adventure") {
            this.adventureMovies.push(movieb)
          }
          if(movieb.genre=="Musical") {
            this.musicalMovies.push(movieb)
          }
          if(movieb.genre=="Sci-Fi") {
            this.scifiMovies.push(movieb)
          }
      })
    })
  }
}
