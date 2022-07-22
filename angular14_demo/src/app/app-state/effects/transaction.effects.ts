import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { TransactionService } from '../../service/transaction.service';
// import { TodoService } from '../../_services';
import * as transactionAction from '../actions';
import { Observable, of as observableOf } from 'rxjs';
import { Transaction } from '../entity/transaction.entity';

@Injectable()
export class TransactionEffects {

  constructor(
    private actions$: Actions,
    // private todoService: TodoService
    private transactionService: TransactionService
  ) { }

  getTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(transactionAction.getTransactionsAction),
      exhaustMap(action =>
        this.transactionService.gettransactions().pipe(
          map(response => {
            console.log("response:::", response)
            return transactionAction.getTransactionsSuccess({ response })
          }),
          catchError((error: any) => of(transactionAction.getTransactionsFailure(error))))
      )
    )
  );

  createTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(transactionAction.createTransaction),
      exhaustMap(tran =>
        this.transactionService.addtransaction(tran.transaction).pipe(
          map(response => transactionAction.createTransactionSuccess(response)),
          catchError((error: any) => of(transactionAction.createTransactionFailure(error))))
      )
    )
  );


  deleteTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(transactionAction.deleteTransaction),
      exhaustMap((tran: Transaction) => this.transactionService.deletetransaction(tran.id).pipe(
        map(response => transactionAction.deleteTransactionSuccess(response)),
        catchError((error: any) => of(transactionAction.deleteTransactionFailure(error))))
      )
    )
  );

  editTransaction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(transactionAction.editTransaction),
      exhaustMap((tran: any) =>
        this.transactionService.edittransaction(tran.transaction).pipe(
          map(response => {
            console.log("edittransaction response:::", response)
            return transactionAction.editTransactionSuccess(response)
          }),
          catchError((error: any) => of(transactionAction.editTransactionFailure(error))))
      )
    )
  );

}
