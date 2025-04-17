import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1ParentComponent } from './test1-parent.component';

describe('Test1ParentComponent', () => {
  let component: Test1ParentComponent;
  let fixture: ComponentFixture<Test1ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test1ParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test1ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
