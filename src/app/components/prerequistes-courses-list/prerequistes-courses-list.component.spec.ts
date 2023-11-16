import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrerequistesCoursesListComponent } from './prerequistes-courses-list.component';

describe('PrerequistesCoursesListComponent', () => {
  let component: PrerequistesCoursesListComponent;
  let fixture: ComponentFixture<PrerequistesCoursesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrerequistesCoursesListComponent]
    });
    fixture = TestBed.createComponent(PrerequistesCoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
