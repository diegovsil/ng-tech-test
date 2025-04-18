import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBitcoinComponent } from './test-bitcoin.component';

describe('TestBitcoinComponent', () => {
  let component: TestBitcoinComponent;
  let fixture: ComponentFixture<TestBitcoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBitcoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBitcoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
