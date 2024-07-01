import { TestBed } from '@angular/core/testing';

import { UsersCrudServiceService } from './users-crud.service.service';

describe('UsersCrudServiceService', () => {
  let service: UsersCrudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersCrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
