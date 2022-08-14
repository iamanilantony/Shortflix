import { Component, OnInit } from '@angular/core';
import { SubmissionService } from './services/submission.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css'],
})
export class SubmitComponent implements OnInit {
  movieData: any;
  id: string;
  movie = { movieName: 'Bahubaliz', event: 'Inter Disctrict Arts Fest' };
  constructor(
    public subserve: SubmissionService,
    private router: Router,
    public putmdata: SubmissionService
  ) {
    this.fetchMovie();
  }

  ngOnInit(): void {}

  fetchMovie() {
    this.subserve.getEmovie().subscribe((movies) => {
      this.movieData = Object.values(movies);
    });
  }
  routerSubscriber(id: any) {
    this.router.navigate([`/movie/${id}`]);
  }
}
