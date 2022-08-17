import { Component, OnInit } from '@angular/core';
import { SubmissionService } from './services/submission.service';
import { Router } from '@angular/router';
import { ModalserveService } from '../modalserve.service';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent implements OnInit {
  movieData: any;
  id: string;
  totalSubmission = 0;
  movie = { movieName: 'Bahubaliz', event: 'Inter Disctrict Arts Fest' };
  constructor(
    public subserve: SubmissionService,
    private router: Router,
    public putmdata: SubmissionService,
    public serve: ModalserveService
  ) {
    this.fetchMovie();
  }

  ngOnInit(): void {}

  fetchMovie() {
    this.subserve.getEmovie().subscribe((movies) => {
      this.movieData = Object.values(movies);
      this.totalSubmission = this.movieData.length;
      this.serve.YourSubmission = this.totalSubmission;
      this.serve.PendingSubmission = this.totalSubmission;
      console.log(this.serve.YourSubmission);
    });
  }
  routerSubscriber(id: any) {
    this.router.navigate([`/movie/${id}`]);
  }
}
