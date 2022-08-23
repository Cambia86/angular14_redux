
import { createAction, props } from '@ngrx/store';

export const LOGIN = '[LOGIN] LOGIN';
export const LOGIN_SUCCESS = '[LOGIN] LOGIN Success';
export const LOGIN_FAILURE = '[LOGIN] LOGIN Failure';

export const LOGOUT = '[LOGIN] LOGOUT';

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
