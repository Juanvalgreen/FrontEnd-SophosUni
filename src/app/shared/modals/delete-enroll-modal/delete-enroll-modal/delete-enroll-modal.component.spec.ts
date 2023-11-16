import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnrollModalComponent } from './delete-enroll-modal.component';

describe('DeleteEnrollModalComponent', () => {
  let component: DeleteEnrollModalComponent;
  let fixture: ComponentFixture<DeleteEnrollModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEnrollModalComponent]
    });
    fixture = TestBed.createComponent(DeleteEnrollModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
