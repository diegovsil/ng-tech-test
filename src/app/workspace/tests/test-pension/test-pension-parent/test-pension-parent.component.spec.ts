import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPensionParentComponent } from './test-pension-parent.component';

describe('TestPensionParentComponent', () => {
  let component: TestPensionParentComponent;
  let fixture: ComponentFixture<TestPensionParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPensionParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPensionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
