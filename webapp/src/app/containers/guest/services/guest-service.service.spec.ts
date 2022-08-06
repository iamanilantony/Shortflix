import { TestBed } from '@angular/core/testing';

import { GuestServiceService } from './guest-service.service';

describe('GuestServiceService', () => {
  let service: GuestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
