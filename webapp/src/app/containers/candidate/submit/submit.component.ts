import { Component, OnInit } from '@angular/core';
import { SubmissionService } from './services/submission.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent implements OnInit {
  movieData: any;
  myMovies = [];

  constructor(public subserve: SubmissionService) {
    this.fetchMovie();
  }

  ngOnInit(): void {}

  fetchMovie() {
    return this.subserve.getEmovie().subscribe((movies) => {
      this.movieData = Object.values(movies);
    });
  }
  // console.log(this.movieData, ' real hiii');

  // for (let movie in movieData) {
  //   // localStorage.getItem('id') === movie.user_id;
  //   let us = movie.user_id;
  //   console.log(us);
  // '62ef5fce2b1901b638f41921' == movie.user_id;

  // console.log(this.movieData, 'This is a movie');
}
