import { TestBed } from '@angular/core/testing';

import { ApprovedCoursesService } from './approved-courses.service';

describe('ApprovedCoursesService', () => {
  let service: ApprovedCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovedCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
