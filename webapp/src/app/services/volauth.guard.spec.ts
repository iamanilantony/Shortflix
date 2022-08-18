import { TestBed } from '@angular/core/testing';

import { VolauthGuard } from './volauth.guard';

describe('VolauthGuard', () => {
  let guard: VolauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VolauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
