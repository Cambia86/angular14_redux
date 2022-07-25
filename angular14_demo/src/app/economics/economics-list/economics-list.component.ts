import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import * as fromRoot from '../../app-state/';
import { Subject } from 'rxjs';
import { Transaction } from '../../app-state/entity/transaction.entity';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as transactionActions from '../../app-state/actions';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-economics-list',
  templateUrl: './economics-list.component.html',
  styleUrls: ['./economics-list.component.css']
})
export class EconomicsListComponent implements OnInit {

  modalRef!: BsModalRef;
  modalRefdel!: BsModalRef;
  transaction: Transaction[] = [];

  currentTransactionId: string | undefined;

  constructor(private router: Router,
    private readonly store: Store,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {

    this.getTransaction();

    this.store.select(fromRoot.getTransactions).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.transaction = data.transaction!

      if (data.isLoadingSuccess)
        this.toastr.success('Hello world!', 'Toastr fun!');

      if (data.isLoading) {
        this.spinner.show();

      }
      else
        this.spinner.hide();
    });
  }

  @Output() editTransaction = new EventEmitter<any>();

  editForm = new FormGroup({
    id: new FormControl('',),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });

  destroy$: Subject<boolean> = new Subject<boolean>();

  getTransaction() {
    // console.log('editing this task:::', task);
    this.store.dispatch(transactionActions.getTransactionsAction());
  }


  editTran(transaction: any) {
    console.log('editing this transaction:::', transaction);
    this.store.dispatch(transactionActions.editTransaction({ transaction }));
  }

  addTran(transaction: any) {
    console.log('adding this transaction:::', transaction);
    this.store.dispatch(transactionActions.createTransaction({ transaction }));
  }

  deleteTransaction() {
    let transactionid = this.currentTransactionId;
    console.log('cancel this transaction:::', this.currentTransactionId);
    this.store.dispatch(transactionActions.deleteTransaction({ transactionid }));
    this.modalRefdel.hide();
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.modalRef.hide();
    if (this.editForm.value.id == "")
      this.addTran(this.editForm.value);
    else
      this.editTran(this.editForm.value);
  }

  openModal(template: TemplateRef<any>, task: any) {
    // task.id = task.id;
    if (task != null)
      this.editForm.setValue({ id: task.id!, name: task.name!, description: task.description!, value: task.value!.toString(), category: task.category!, type: task.type! });
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(templatedel: TemplateRef<any>, transaction: any) {

    this.currentTransactionId = transaction.id!;
    this.modalRefdel = this.modalService.show(templatedel);
  }

  ngOnInit(): void {
    var lintwait = "";

    this.store.select(fromRoot.getTransactions).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      if (data.transaction != undefined) {
        this.transaction = data.transaction;
      }
    })
  }


}
