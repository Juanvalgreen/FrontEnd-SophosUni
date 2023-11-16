import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { inAuthGuard } from './in-auth.guard';

describe('inAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => inAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
