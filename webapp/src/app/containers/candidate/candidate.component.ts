import { Component, OnInit } from '@angular/core';

import { ModalserveService } from './modalserve.service';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  CandidateGreetingName: String;
  TotalEvents = 0;
  CurrentEvents = 0;
  YourSubmission = 0;
  PendingSubmission = 0;
  constructor(public serve: ModalserveService) {
    this.CandidateGreetingName = localStorage.getItem('name') || ' ';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.setData();
    }, 2000);
  }
  setData() {
    this.YourSubmission = this.serve.YourSubmission;
    this.PendingSubmission = this.serve.PendingSubmission;
    this.TotalEvents = this.serve.TotalEvents;
    this.CurrentEvents = this.serve.CurrentEvents;
  }
}
