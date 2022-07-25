import { createAction, props } from '@ngrx/store';
import { Transaction } from '../entity/transaction.entity';
// import { TRANSACTION } from '../entity';

export const GET_TRANSACTIONS = '[TRANSACTION] Get TRANSACTIONs';
export const GET_TRANSACTIONS_SUCCESS = '[TRANSACTION] Get TRANSACTIONs Success';
export const GET_TRANSACTIONS_FAILURE = '[TRANSACTION] Get TRANSACTIONs Failure';

export const CREATE_TRANSACTION = '[TRANSACTION] Create TRANSACTION';
export const CREATE_TRANSACTION_SUCCESS = '[TRANSACTION] Create TRANSACTION Success';
export const CREATE_TRANSACTION_FAILURE = '[TRANSACTION] Create TRANSACTION Failure';

export const DELETE_TRANSACTION = '[TRANSACTION] Delete TRANSACTION';
export const DELETE_TRANSACTION_SUCCESS = '[TRANSACTION] Delete TRANSACTION Success';
export const DELETE_TRANSACTION_FAILURE = '[TRANSACTION] Delete TRANSACTION Failure';

export const EDIT_TRANSACTION = '[TRANSACTION] Edit TRANSACTION';
export const EDIT_TRANSACTION_SUCCESS = '[TRANSACTION] Edit TRANSACTION Success';
export const EDIT_TRANSACTION_FAILURE = '[TRANSACTION] Edit TRANSACTION Failure';


export const getTransactionsAction = createAction(
  GET_TRANSACTIONS
);

export const getTransactionsSuccess = createAction(
  GET_TRANSACTIONS_SUCCESS,
  props<any>()
);

export const getTransactionsFailure = createAction(
  GET_TRANSACTIONS_FAILURE,
  props<{ any: any }>()
);

export const createTransaction = createAction(
  CREATE_TRANSACTION,
  props<{ transaction: any }>()
);

export const createTransactionSuccess = createAction(
  CREATE_TRANSACTION_SUCCESS,
  props<any>()
);

export const createTransactionFailure = createAction(
  CREATE_TRANSACTION_FAILURE,
  props<{ any: any }>()
);

export const deleteTransaction = createAction(
  DELETE_TRANSACTION,
  props<{ transactionid: any }>()
);

export const deleteTransactionSuccess = createAction(
  DELETE_TRANSACTION_SUCCESS,
  props<any>()
);

export const deleteTransactionFailure = createAction(
  DELETE_TRANSACTION_FAILURE,
  props<{ any: any }>()
);

export const editTransaction = createAction(
  EDIT_TRANSACTION,
  props<{ transaction: any }>()
);

export const editTransactionSuccess = createAction(
  EDIT_TRANSACTION_SUCCESS,
  props<any>()
);

export const editTransactionFailure = createAction(
  EDIT_TRANSACTION_FAILURE,
  props<{ any: any }>()
);
