import { Component, OnInit } from '@angular/core';

import { ModalserveService } from './modalserve.service';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
})
export class CandidateComponent implements OnInit {
  constructor(public serve: ModalserveService) {}

  ngOnInit(): void {}


  }

