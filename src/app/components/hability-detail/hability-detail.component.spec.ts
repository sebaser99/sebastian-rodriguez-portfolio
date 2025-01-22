import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilityDetailComponent } from './hability-detail.component';

describe('HabilityDetailComponent', () => {
  let component: HabilityDetailComponent;
  let fixture: ComponentFixture<HabilityDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilityDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
