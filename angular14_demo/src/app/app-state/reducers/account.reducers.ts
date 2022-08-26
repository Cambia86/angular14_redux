import { Action, createReducer, on } from '@ngrx/store';
import { Account } from '../entity/account.entity';
// import * as todoActions from '../actions';
import * as accountAction from '../actions';
import * as _ from 'lodash'
import * as storage from '../state/storage';

export interface State {
  // tasks?: Task[];
  // transactions?: Transaction[];
  account?: Account;
  // currentTransaction?: Transaction;
  isLoggedIn: boolean;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  account: storage.getItem('account').account != undefined ? storage.getItem('account').account : Account,
  // currentTransaction: {},
  // deleteTaskId: '',
  result: '',
  isLoggedIn: false,
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};


const accountReducer = createReducer(
  initialState,

  on(accountAction.loginAction, (state) => ({ ...state, isLoading: true })),
  on(accountAction.loginActionSuccess, (state, result) => (
    { account: result.response, isLoggedIn: true, isLoading: false, isLoadingSuccess: true }
  )),
  on(accountAction.logoutAction, (state) => ({ ...state, isLoggedIn: false, account: undefined })),

  on(accountAction.signupAction, (state) => ({ ...state, isLoading: true })),
  on(accountAction.signupActionSuccess, (state, result) => (
    { account: result.response, isLoggedIn: true, isLoading: false, isLoadingSuccess: true }
  )),

)

export function reducer(state: State | undefined, action: Action): any {
  return accountReducer(state, action);
}

export const getAccountReducer = (state: State) => {
  return {
    account: state.account,
    isLoading: state.isLoading,
    isLoggedIn: state.isLoggedIn,
    isLoadingSuccess: state.isLoadingSuccess
  };
};
