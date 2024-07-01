import { TestBed } from '@angular/core/testing';

import { LoadPagesServiceService } from './load-pages.service.service';

describe('LoadPagesServiceService', () => {
  let service: LoadPagesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPagesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
