import { TestBed } from '@angular/core/testing';

import { PrerequisiteCoursesService } from './prerequisite-courses.service';

describe('PrerequisiteCoursesService', () => {
  let service: PrerequisiteCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrerequisiteCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
