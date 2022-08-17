import { Component, OnInit } from '@angular/core';
import { ModalserveService } from '../modalserve.service';
// import { ProduModel } from './events.model';
import { GetEtableService } from './services/get-etable.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  // Etable: ProduModel[];
  EventData: any;
  constructor(
    public serve: ModalserveService,
    public getTable: GetEtableService
  ) {
    this.fetchEvent();
  }

  ngOnInit(): void {}
  // this.getTable.getETable().subscribe((table)=>{
  //     this.Etable=JSON.parse(Json.stringify(table))
  // })
  putEventModal(event_id: any, event_name: any) {
    this.serve.showDialog = true;
    this.serve.event_id = event_id;
    this.serve.eventName = event_name;

    console.log(event_id);
  }

  fetchEvent() {
    return this.getTable.getETable().subscribe((events) => {
      this.EventData = Object.values(events);
      this.serve.TotalEvents = this.EventData.length;
      this.serve.CurrentEvents = this.EventData.length;
    });
  }
}
