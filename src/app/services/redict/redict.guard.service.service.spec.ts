import { TestBed } from '@angular/core/testing';

import { RedictGuardServiceService } from './redict.guard.service.service';

describe('RedictGuardServiceService', () => {
  let service: RedictGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedictGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
