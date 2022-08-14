import { TestBed } from '@angular/core/testing';

import { VideoServicesService } from './video-services.service';

describe('VideoServicesService', () => {
  let service: VideoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
