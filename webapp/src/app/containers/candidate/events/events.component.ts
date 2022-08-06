import { Component, OnInit } from '@angular/core';
import { ModalserveService } from '../modalserve.service';
import { ProduModel } from './events.model';
// import { GetEtableService } from './services/get-etable.service';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  // Etable: ProduModel[];
  constructor(
    public serve: ModalserveService
    // public getTable: GetEtableService
  );

  ngOnInit(): void {}
  // this.getTable.getETable().subscribe((table)=>{
  //     this.Etable=JSON.parse(Json.stringify(table))
  // })
}
