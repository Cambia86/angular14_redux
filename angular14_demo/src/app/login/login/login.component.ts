import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import * as accountAction from '../../app-state/actions';
import * as fromRoot from '../../app-state/';
import { Subject } from 'rxjs';
import { Account } from '../../app-state/entity/account.entity';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // form: FormGroup | undefined;
  account: Account | undefined;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('The Mandalorian', Validators.required)
  });

  submitted = false;
  @Output() login: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private readonly store: Store,
    private spinner: NgxSpinnerService,) {

  }

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
    this.store.select(fromRoot.getAccount).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.account = data.account!

      if (this.account != undefined && data.isLoadingSuccess) {
        this.router.navigate(['/dashboard']);
      }
      // this.toastr.success('Hello world!', 'Toastr fun!');

      if (data.isLoading) {
        this.spinner.show();
      }
      else
        this.spinner.hide();
    });

  }

  get f() { return this.loginForm!.controls; }



  onSubmit() {
    this.submitted = true;
    let formProp = {
      username: this.loginForm!.value.username,
      password: this.loginForm!.value.password
    }
    this.store.dispatch(accountAction.loginAction({ formProp }));


    // stop here if form is invalid
    // if (this.loginForm!.status == "VALID") {
    //   this.router.navigate(['/dashboard'])
    // }
    // this.login.emit(this.f['username']);


  }
}
