import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSectionComponent } from './public-section.component';

describe('PublicSectionComponent', () => {
  let component: PublicSectionComponent;
  let fixture: ComponentFixture<PublicSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
