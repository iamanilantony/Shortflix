import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalserveService } from '../modalserve.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  Eventid = '';
  movie = {
    url: '',
    theme: '',
    status: 'Pending',
    directedBy: '',

    Others: '',
    event: '',
    eventName: '',
    user_id: '',
    movieName: '',
    genre: '',
    crew: {
      Producer: '',
      Actor: '',
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
  constructor(public serve: ModalserveService) {}

  ngOnInit(): void {}
  send_Movie_to_Service(GetForm: NgForm): void {
    this.movie.crew.cinematography = GetForm.value.cinematography;
    this.movie.crew.editor = GetForm.value.editor;
    this.movie.crew.asst_director = GetForm.value.asst_director;
    this.movie.crew.writer = GetForm.value.writer;
    this.movie.event = this.serve.event_id;
    this.movie.eventName = this.serve.eventName;
    this.movie.user_id = localStorage.getItem('id') || '';
    // this.
    this.serve.sendmovieToBackend(this.movie);
    this.serve.showDialog = false;
  }
}
