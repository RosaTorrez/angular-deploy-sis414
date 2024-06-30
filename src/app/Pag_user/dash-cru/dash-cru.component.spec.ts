import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCruComponent } from './dash-cru.component';

describe('DashCruComponent', () => {
  let component: DashCruComponent;
  let fixture: ComponentFixture<DashCruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashCruComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashCruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
