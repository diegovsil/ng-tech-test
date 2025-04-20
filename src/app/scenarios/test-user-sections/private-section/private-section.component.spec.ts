import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSectionComponent } from './private-section.component';

describe('PrivateSectionComponent', () => {
  let component: PrivateSectionComponent;
  let fixture: ComponentFixture<PrivateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
