import { Component, OnInit } from '@angular/core';
import { ViewservisesService } from './servises/viewservises.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  vMoviedata:any;
  constructor(
    public getmovie:ViewservisesService) {
      this.fetchvmovie();
     }

  ngOnInit(): void {
  }
  fetchvmovie(){
    return this.getmovie.getvmovie().subscribe((movies) => {
      console.log(movies);
      this.vMoviedata = Object.values(movies);
      console.log(this.vMoviedata);
    })
  }

}
