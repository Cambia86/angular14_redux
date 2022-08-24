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
import * as fromCategory from './reducers/category.reducers';

export interface State {
  transaction: fromTransaction.State;
  account: fromAccount.State;
  category: fromCategory.State
}

export const reducers: ActionReducerMap<State> = {
  transaction: fromTransaction.reducer,
  account: fromAccount.reducer,
  category: fromCategory.reducer
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


// Todo reducers Begin
export const geAccountState = createFeatureSelector<fromAccount.State>('account');

export const getAccount = createSelector(
  geAccountState,
  fromAccount.getAccountReducer
);


export const getCategoryState = createFeatureSelector<fromCategory.State>('category');

export const getCategory = createSelector(
  getCategoryState,
  fromCategory.getcategoryReducer
);


export const geTransactionState = createFeatureSelector<fromTransaction.State>('transaction');

export const getTransactions = createSelector(
  geTransactionState,
  fromTransaction.getTransactionReducer
);
