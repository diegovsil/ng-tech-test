import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUserSectionsComponent } from './test-user-sections.component';

describe('TestUserSectionsComponent', () => {
  let component: TestUserSectionsComponent;
  let fixture: ComponentFixture<TestUserSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestUserSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestUserSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
