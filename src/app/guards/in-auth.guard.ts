import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { SessionDataService } from '../services/session-data/session-data.service';

export const inAuthGuard: CanActivateFn = (route, state) => {
  const sessionData = inject(SessionDataService);
  const router = inject(Router);

  if(sessionData.getData('currentUser') != null){

    router.navigateByUrl('/home');
    return false;
  }else{

    return true;


  }
};
