import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisfComponent } from './pelisf.component';

describe('PelisfComponent', () => {
  let component: PelisfComponent;
  let fixture: ComponentFixture<PelisfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PelisfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PelisfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
