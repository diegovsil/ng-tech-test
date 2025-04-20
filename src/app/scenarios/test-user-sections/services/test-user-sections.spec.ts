import { TestBed } from '@angular/core/testing';

import { TestUserSectionsService } from './test-user-sections.service';

describe('TestUserSectionsService', () => {
  let service: TestUserSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestUserSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
