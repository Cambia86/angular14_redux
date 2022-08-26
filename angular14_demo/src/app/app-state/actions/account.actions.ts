
import { createAction, props } from '@ngrx/store';

export const LOGIN = '[LOGIN] LOGIN';
export const LOGIN_SUCCESS = '[LOGIN] LOGIN Success';
export const LOGIN_FAILURE = '[LOGIN] LOGIN Failure';

export const LOGOUT = '[LOGIN] LOGOUT';

export const SIGNUP = '[LOGIN] SIGNUP';
export const SIGNUP_SUCCESS = '[LOGIN] SIGNUP SUCCESS';
export const SIGNUP_FAILURE = '[LOGIN] SIGNUP FAILURE';

export const loginAction = createAction(
  LOGIN,
  props<{ formProp: any }>()
);

export const loginActionSuccess = createAction(
  LOGIN_SUCCESS,
  props<any>()
);

export const loginActionFailure = createAction(
  LOGIN_FAILURE,
  props<{ any: any }>()
);

export const logoutAction = createAction(
  LOGOUT
);

export const signupAction = createAction(
  SIGNUP,
  props<{ formProp: any }>()
);

export const signupActionSuccess = createAction(
  LOGIN_SUCCESS,
  props<any>()
);

export const signupActionFailure = createAction(
  LOGIN_FAILURE,
  props<{ any: any }>()
);
