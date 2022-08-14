import { Component, OnInit } from '@angular/core';
import { SubmissionService } from './services/submission.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent implements OnInit {
  movieData: any;

  constructor(public subserve: SubmissionService) {
    this.fetchMovie();
  }

  ngOnInit(): void {}

  fetchMovie() {
    return this.subserve.getEmovie().subscribe((movies) => {
      this.movieData = Object.values(movies);
      console.log(this.movieData, 'Submission service');
    });
  }
}
