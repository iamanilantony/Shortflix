import { TestBed } from '@angular/core/testing';

import { EventTransferService } from './event-transfer.service';

describe('EventTransferService', () => {
  let service: EventTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
