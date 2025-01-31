import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerMenuComponent } from './hamburguer-menu.component';

describe('HamburguerMenuComponent', () => {
  let component: HamburguerMenuComponent;
  let fixture: ComponentFixture<HamburguerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamburguerMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamburguerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
