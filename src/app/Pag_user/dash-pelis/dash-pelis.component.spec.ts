import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPelisComponent } from './dash-pelis.component';

describe('DashPelisComponent', () => {
  let component: DashPelisComponent;
  let fixture: ComponentFixture<DashPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashPelisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
