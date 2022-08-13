import { TestBed } from '@angular/core/testing';

import { ViewservisesService } from './viewservises.service';

describe('ViewservisesService', () => {
  let service: ViewservisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewservisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
