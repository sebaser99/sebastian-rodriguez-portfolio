import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSwitchComponent } from './dark-switch.component';

describe('DarkSwitchComponent', () => {
  let component: DarkSwitchComponent;
  let fixture: ComponentFixture<DarkSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
