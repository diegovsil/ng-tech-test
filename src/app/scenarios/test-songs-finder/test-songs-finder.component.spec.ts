import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSongsFinderComponent } from './test-songs-finder.component';

describe('TestSongsFinderComponent', () => {
  let component: TestSongsFinderComponent;
  let fixture: ComponentFixture<TestSongsFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSongsFinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSongsFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
