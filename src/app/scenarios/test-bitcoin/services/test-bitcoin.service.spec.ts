import { TestBed } from '@angular/core/testing';

import { TestBitcoinService } from './test-bitcoin.service';

describe('TestBitcoinService', () => {
  let service: TestBitcoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestBitcoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
