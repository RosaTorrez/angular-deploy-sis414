import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripComponent } from './descrip.component';

describe('DescripComponent', () => {
  let component: DescripComponent;
  let fixture: ComponentFixture<DescripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
