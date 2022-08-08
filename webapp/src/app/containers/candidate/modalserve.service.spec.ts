import { TestBed } from '@angular/core/testing';

import { ModalserveService } from './modalserve.service';

describe('ModalserveService', () => {
  let service: ModalserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
