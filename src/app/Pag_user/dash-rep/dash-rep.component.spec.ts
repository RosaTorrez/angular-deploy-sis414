import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRepComponent } from './dash-rep.component';

describe('DashRepComponent', () => {
  let component: DashRepComponent;
  let fixture: ComponentFixture<DashRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashRepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
