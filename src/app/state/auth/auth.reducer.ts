import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { CurrentUser } from "src/app/models/currentUser.model";
import { loginSuccess } from "./auth.actions";



export const initialState: CurrentUser= {

  user_mail: '',
  token:''

}

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, {currentUser}) =>{
    return{
      ...state,
      user_mail: currentUser.user_mail,
      token: currentUser.token

    }


  })
);


export function authReducer(state: any, action: any){
  return _authReducer(state, action);
}


export const selectAuthState = createFeatureSelector<CurrentUser>('auth');

export const selectToken= createSelector(selectAuthState, state => state.token);
export const selectMail= createSelector(selectAuthState, state => state.user_mail);
