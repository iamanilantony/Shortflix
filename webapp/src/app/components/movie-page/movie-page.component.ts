import { Component, OnInit } from '@angular/core';
import { SubmissionService } from 'src/app/containers/candidate/submit/services/submission.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css'],
})
export class MoviePageComponent implements OnInit {
  movie_id: any;
  movieName: String;
  theme: String;
  marks: [];
  directedBy: String;
  eventName: string;
  //marks
  Overall: string;

  movieData: any;
  constructor(
    public statusData: SubmissionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.movie_id = params));
    this.GetMovieDetails();
  }
  GetMovieDetails() {
    return this.statusData
      .getMovieSub(this.movie_id.id)
      .subscribe((movieSub: any) => {
        this.movieData = movieSub;
        console.log('data', this.movieData.marks[0], 'movie-page.compo');
        this.movieName = this.movieData.movieName;
        this.directedBy = this.movieData.directedBy;
        this.theme = this.movieData.theme;
        this.eventName = this.movieData.eventName;
      });
  }
}
