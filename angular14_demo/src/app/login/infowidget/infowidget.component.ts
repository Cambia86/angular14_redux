import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app-state/';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Account } from '../../app-state/entity/account.entity';
import * as accountAction from '../../app-state/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infowidget',
  templateUrl: './infowidget.component.html',
  styleUrls: ['./infowidget.component.css']
})
export class InfowidgetComponent implements OnInit {

  account: Account | undefined;
  isLoggedIn: boolean | undefined;

  constructor(
    private readonly store: Store,
    private router: Router,
  ) { }

  destroy$: Subject<boolean> = new Subject<boolean>();

  logout() {
    this.store.dispatch(accountAction.logoutAction());
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.store.select(fromRoot.getAccount).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.account = data.account!
      this.isLoggedIn = data.isLoggedIn;

      // if (data.isLoadingSuccess) {
      //   this.router.navigate(['/dashboard']);
      // }
      // // this.toastr.success('Hello world!', 'Toastr fun!');

      // if (data.isLoading) {
      //   this.spinner.show();
      // }
      // else
      //   this.spinner.hide();
    });

  }

}
