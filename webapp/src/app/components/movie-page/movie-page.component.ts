import { Component, OnInit } from '@angular/core';
import { SubmissionService } from 'src/app/containers/candidate/submit/services/submission.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  movie_id: string;
  movieName: String;
  theme: String;
  marks: String;
  directedBy: String;
  constructor(
    public statusData: SubmissionService,
    private route: ActivatedRoute
  ) {
    this.GetMovieDetails();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.movie_id = params['id'];
      console.log(this.movie_id, 'adlee');
    });
  }
  GetMovieDetails() {
    return this.statusData.getMovieSub(this.movie_id).subscribe((movieSub) => {
      console.log(movieSub);
    });
  }
}
