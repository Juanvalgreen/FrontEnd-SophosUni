import { createAction, props } from '@ngrx/store';
import { CurrentUser } from 'src/app/models/currentUser.model';


export const loginSuccess = createAction(
  '[login] login success',
  props<{currentUser: CurrentUser}>()




);
