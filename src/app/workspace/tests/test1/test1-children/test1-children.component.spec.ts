import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1ChildrenComponent } from './test1-children.component';

describe('Test1ChildrenComponent', () => {
  let component: Test1ChildrenComponent;
  let fixture: ComponentFixture<Test1ChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test1ChildrenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test1ChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
