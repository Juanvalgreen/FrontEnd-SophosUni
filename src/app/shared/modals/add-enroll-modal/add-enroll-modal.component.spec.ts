import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnrollModalComponent } from './add-enroll-modal.component';

describe('AddEnrollModalComponent', () => {
  let component: AddEnrollModalComponent;
  let fixture: ComponentFixture<AddEnrollModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEnrollModalComponent]
    });
    fixture = TestBed.createComponent(AddEnrollModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
