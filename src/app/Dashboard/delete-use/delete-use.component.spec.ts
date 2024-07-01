import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUseComponent } from './delete-use.component';

describe('DeleteUseComponent', () => {
  let component: DeleteUseComponent;
  let fixture: ComponentFixture<DeleteUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
