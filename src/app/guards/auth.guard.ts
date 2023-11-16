import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { SessionDataService } from '../services/session-data/session-data.service';

export const authGuard: CanMatchFn = (route, state) => {

  const sessionData = inject(SessionDataService);
  const router = inject(Router);

  if(sessionData.getData('currentUser') != null){

    return true;
  }else{
    return false;


  }
};
