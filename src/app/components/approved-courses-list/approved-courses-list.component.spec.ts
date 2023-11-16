import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedCoursesListComponent } from './approved-courses-list.component';

describe('ApprovedCoursesListComponent', () => {
  let component: ApprovedCoursesListComponent;
  let fixture: ComponentFixture<ApprovedCoursesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedCoursesListComponent]
    });
    fixture = TestBed.createComponent(ApprovedCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
