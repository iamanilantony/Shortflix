import { Component, OnInit } from '@angular/core';
import { ModalserveService } from '../modalserve.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  movie = {
    url       : '',
    theme     : '',
    director  : '',
    Producer  : '',
    Actor     : '',
    Others    : ''
  }
  constructor(public serve:ModalserveService) { }

  ngOnInit(): void {
  }
  send_Movie_to_Service(){
        this.serve.sendmovieToBackend(this.movie);
        this.serve.showDialog=false;
       
        return false
  }
}
