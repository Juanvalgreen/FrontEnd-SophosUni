/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeachersService } from './teachers.service';

describe('Service: Teachers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeachersService]
    });
  });

  it('should ...', inject([TeachersService], (service: TeachersService) => {
    expect(service).toBeTruthy();
  }));
});
