import { Action, createReducer, on } from '@ngrx/store';
import { Transaction } from '../entity/transaction.entity';
// import * as todoActions from '../actions';
import * as transactionAction from '../actions';
import * as _ from 'lodash'
import * as storage from '../state/storage';

export interface State {
  // tasks?: Task[];
  transactions?: Transaction[];
  currentTransaction?: Transaction;
  deleteTaskId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  transactions: storage.getItem('transaction').transaction != undefined ? storage.getItem('transaction').transaction : Array<Transaction>,
  currentTransaction: {},
  deleteTaskId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const transactionReducer = createReducer(
  initialState,

  // GeTasks
  on(transactionAction.getTransactionsAction, (state) => ({ ...state, isLoading: true })),
  on(transactionAction.getTransactionsSuccess, (state, result) => ({ transactions: result.response, isLoading: false, isLoadingSuccess: true })),

  // Create Task Reducers
  on(transactionAction.createTransaction, (state, { transaction }) => (
    { ...state, isLoading: true, currentTransaction: transaction }
  )),
  on(transactionAction.createTransactionSuccess, (state, result) => {
    const transaction = undefined !== state.transactions ? _.cloneDeep(state.transactions) : [];
    const currentTransaction = undefined !== state.currentTransaction ? _.cloneDeep(state.currentTransaction) : new Transaction("", "", 0, "", "", "", "");
    currentTransaction.id = result.transactionId;
    transaction.push(currentTransaction);
    return {
      transactions: transaction,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Delete Task Reducers
  on(transactionAction.deleteTransaction, (state, { transactionid }) => (
    { ...state, isLoading: true, deleteTaskId: transactionid })
  ),
  on(transactionAction.deleteTransactionSuccess, (state, result) => {
    let transaction = undefined !== state.transactions ? _.cloneDeep(state.transactions) : [];
    if (result.deletedCount > 0) {
      transaction = transaction.filter(tran => tran.id !== state.deleteTaskId);
    }
    return {
      transactions: transaction,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Edit Task Reducers
  on(transactionAction.editTransaction, (state, transaction) => ({ ...state, isLoading: true, currentTransaction: transaction.transaction })),
  on(transactionAction.editTransactionSuccess, (state, result) => {
    let transaction = undefined !== state.transactions ? _.cloneDeep(state.transactions) : [];
    const currentTransaction = undefined !== state.currentTransaction ? _.cloneDeep(state.currentTransaction) : new Transaction("", "", 0, "", "", "", "");
    transaction = transaction.map(tsk => {
      if (tsk.id === currentTransaction!.id) {
        tsk = currentTransaction;
      }
      return tsk;
    });
    return {
      transactions: transaction,
      isLoading: false,
      isLoadingSuccess: true
    };
  })
);

export function reducer(state: State | undefined, action: Action): any {
  return transactionReducer(state, action);
}

export const getTransactionReducer = (state: State) => {
  return {
    transaction: state.transactions,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};


