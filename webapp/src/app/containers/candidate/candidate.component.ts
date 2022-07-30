import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { ModalComponent } from './modal/modal.component';
import { ModalserveService } from './modalserve.service';
>>>>>>> 7f468ad (movie model-->DB)
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(public serve: ModalserveService) { }
>>>>>>> 7f468ad (movie model-->DB)

  ngOnInit(): void {
  }

}
