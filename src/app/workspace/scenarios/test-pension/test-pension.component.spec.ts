import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPensionComponent } from './test-pension.component';

describe('TestPensionComponent', () => {
  let component: TestPensionComponent;
  let fixture: ComponentFixture<TestPensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPensionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
