import { TestBed } from '@angular/core/testing';

import { TestShopService } from './test-shop.service';

describe('TestShopService', () => {
  let service: TestShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
