import { TestBed } from '@angular/core/testing';

import { DatamodelService } from './datamodel.service';

describe('DatamodelService', () => {
  let service: DatamodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatamodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
