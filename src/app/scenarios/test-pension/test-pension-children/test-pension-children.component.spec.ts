import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPensionChildrenComponent } from './test-pension-children.component';

describe('TestPensionChildrenComponent', () => {
  let component: TestPensionChildrenComponent;
  let fixture: ComponentFixture<TestPensionChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPensionChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPensionChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
