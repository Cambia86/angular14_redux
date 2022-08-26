import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as accountAction from '../actions';
import { Observable, of as observableOf } from 'rxjs';
import { Account } from '../entity/account.entity';
import { AccountService } from '../../service/account.service';


@Injectable()
export class AccountEffects {

  constructor(
    private actions$: Actions,
    private accountService: AccountService
  ) { }


  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(accountAction.loginAction),
      exhaustMap(action =>
        this.accountService.login(action.formProp).pipe(
          map(response => {
            console.log("response:::", response)
            return accountAction.loginActionSuccess({ response })
          }),
          catchError((error: any) => of(accountAction.loginActionFailure(error))))
      )
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(accountAction.signupAction),
      exhaustMap(action =>
        this.accountService.signup(action.formProp).pipe(
          map(response => {
            console.log("response:::", response)
            return accountAction.signupActionSuccess({ response })
          }),
          catchError((error: any) => of(accountAction.signupActionFailure(error))))
      )
    )
  );

}
