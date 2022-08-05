import { TestBed } from '@angular/core/testing';

import { VolunteerServicesService } from './volunteer-services.service';

describe('VolunteerServicesService', () => {
  let service: VolunteerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
