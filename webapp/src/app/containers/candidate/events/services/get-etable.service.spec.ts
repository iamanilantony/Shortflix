import { TestBed } from '@angular/core/testing';

import { GetEtableService } from './get-etable.service';

describe('GetEtableService', () => {
  let service: GetEtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
