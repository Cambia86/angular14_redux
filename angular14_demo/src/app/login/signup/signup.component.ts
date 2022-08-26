import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/internal/Subject';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import * as accountActions from '../../app-state/actions';
import { Account } from '../../app-state/entity/account.entity';
import * as fromRoot from '../../app-state/';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();
  account: Account | undefined;

  constructor(
    private readonly store: Store,
    private router: Router,
  ) {
    this.store.select(fromRoot.getAccount).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.account = data.account!
      if (data.isLoadingSuccess && data.account != undefined) {
        this.router.navigate(['/dashboard']);
      }
    })
  }

  editForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });


  onSubmit() {
    let formProp = this.editForm.value
    this.store.dispatch(accountActions.signupAction({ formProp }));
  }

  ngOnInit(): void {
  }

}
