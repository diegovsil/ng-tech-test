import { TestBed } from '@angular/core/testing';

import { TestSongsFinderService } from './test-songs-finder.service';

describe('TestSongsFinderService', () => {
  let service: TestSongsFinderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestSongsFinderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
