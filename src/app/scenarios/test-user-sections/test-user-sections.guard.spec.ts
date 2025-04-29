import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { testUserSectionsGuard } from './test-user-sections.guard';

describe('testUserSectionsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => testUserSectionsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
