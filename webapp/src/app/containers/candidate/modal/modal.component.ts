import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalserveService } from '../modalserve.service';
import { NgForm } from '@angular/forms';
import { EventTransferService } from '../service/event-transfer.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  Eventid = ""
  movie = {
    url: '',
    theme: '',
    directedBy: '',
    Producer: '',
    Actor: '',
    Others: '',
    event: '',
    user_id: '',
    movieName: '',
    crew: {
      cinematography: '',
      editor: '',
      asst_director: '',
      writer: '',
      others: {
        role: '',
        name: '',
      },
    },
    cast: '',

    date: Date,
    startDate: Date,
    maxEntries: Number,
  };
  constructor(public serve: ModalserveService,
             
    ) {}

  ngOnInit(): void {}
  send_Movie_to_Service(GetForm: NgForm): void {
    console.log(GetForm.value);
    this.movie.crew.cinematography = GetForm.value.cinematography;
    this.movie.crew.editor = GetForm.value.editor;
    this.movie.crew.asst_director = GetForm.value.asst_director;
    this.movie.crew.writer = GetForm.value.writer;
    console.log(this.movie);
    this.movie.event = this.serve.event_id;
    this.movie.user_id = localStorage.getItem('name') || '';
    this.serve.sendmovieToBackend(this.movie);
    this.serve.showDialog = false;
  }
}
