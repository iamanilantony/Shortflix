import { Component, OnInit } from '@angular/core';
import { ViewservisesService } from './servises/viewservises.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  GMoviedata:any;
  constructor(public getmovie:ViewservisesService) { 
    this.fetchgmovie();
  }

  ngOnInit(): void {
  }
  fetchgmovie(){
    return this.getmovie.getGmovie().subscribe((movies) => {
      console.log(movies);
      this.GMoviedata = Object.values(movies);
      console.log(this.GMoviedata);
    })
  }
}
