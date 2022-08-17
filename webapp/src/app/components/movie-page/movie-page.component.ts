import { Component, OnInit } from '@angular/core';
import { SubmissionService } from 'src/app/containers/candidate/submit/services/submission.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ModalserveService } from 'src/app/containers/candidate/modalserve.service';
import { Router } from '@angular/router';
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
  Acting: string;
  Camera: string;
  Direction: string;
  Music: string;
  Overall: string;
  Production: string;
  SFX: string;
  Story: string;
  movieData: any;

  //Update Data
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

  constructor(
    public statusData: SubmissionService,
    private route: ActivatedRoute,
    public serve: ModalserveService,
    public router: Router
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
        console.log('data', this.movieData, 'movie-page.compo');
        this.movieName = this.movieData.movieName;
        this.directedBy = this.movieData.directedBy;
        this.theme = this.movieData.theme;
        this.eventName = this.movieData.eventName;
        this.Movie2waybinder();
      });
  }
  Movie2waybinder() {
    this.movie.url = this.movieData.url;
    this.movie.theme = this.movieData.theme;
    this.movie.directedBy = this.movieData.directedBy;
    this.movie.crew.Producer = this.movieData.crew.Producer;
    this.movie.crew.Actor = this.movieData.crew.Actor;
    this.movie.movieName = this.movieData.movieName;
    this.movie.genre = this.movieData.genre;
    this.movie.crew.cinematography = this.movieData.crew.cinematography;
    this.movie.crew.editor = this.movieData.crew.editor;
    this.movie.crew.asst_director = this.movieData.crew.asst_director;
    this.movie.crew.writer = this.movieData.crew.writer;
    this.movie.cast = this.movieData.cast;
  }
  sendUpdatedMovie(Modalform: NgForm) {
    return this.serve
      .sendUpdatedMovieToBackend(Modalform.value, this.movie_id.id)
      .subscribe();
  }
  DeleteEntry() {
    this.movieData.status = 'Requested Delete';
    return this.serve
      .deleteEntryRequest(this.movieData, this.movie_id.id)
      .subscribe(() => {
        this.router.navigate(['candidate']);
      });
  }
}
