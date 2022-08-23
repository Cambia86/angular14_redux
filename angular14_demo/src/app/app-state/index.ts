import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
// import * as fromUser from './reducers/user.reducer';
import * as fromTransaction from './reducers/transaction.reducers';
import * as fromAccount from './reducers/account.reducers';

export interface State {
  transaction: fromTransaction.State;
  account: fromAccount.State
}

export const reducers: ActionReducerMap<State> = {
  transaction: fromTransaction.reducer,
  account: fromAccount.reducer
};

const reducerKeys = ['transaction'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: reducerKeys })(reducer);
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];



// export const getLoginState = createFeatureSelector<fromUser.State>('user');

// export const getLoggedInUser = createSelector(
//   // getLoginState,
//   fromUser.getLoggedInUser
// );

// export const userLogin = createSelector(
//   getLoginState,
//   fromUser.userLogin
// );

// export const userSignup = createSelector(
//   getLoginState,
//   fromUser.userSignup
// );


// Todo reducers Begin
export const geAccountState = createFeatureSelector<fromAccount.State>('account');

export const getAccount = createSelector(
  geAccountState,
  fromAccount.getAccountReducer
);


export const geTransactionState = createFeatureSelector<fromTransaction.State>('transaction');

export const getTransactions = createSelector(
  geTransactionState,
  fromTransaction.getTransactionReducer
);
