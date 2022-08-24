import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import * as fromRoot from '../../app-state/';
import { Subject } from 'rxjs';
import { Category } from '../../app-state/entity/category.entity';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as categoryActions from '../../app-state/actions';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  modalRef!: BsModalRef;
  modalRefdel!: BsModalRef;
  category: Category[] = [];

  currentCategoryId: string | undefined;

  constructor(private router: Router,
    private readonly store: Store,
    private modalService: BsModalService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService) {

    this.getCategory();

    this.store.select(fromRoot.getCategory).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      this.category = data.category!

      if (data.isLoadingSuccess) { }
      // this.toastr.success('Hello world!', 'Toastr fun!');

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
  });

  destroy$: Subject<boolean> = new Subject<boolean>();

  getCategory() {
    // console.log('editing this task:::', task);
    this.store.dispatch(categoryActions.getCategoryAction());
  }


  editCategory(category: any) {
    console.log('editing this transaction:::', category);
    this.store.dispatch(categoryActions.editCategory({ category }));
  }

  addCategory(category: any) {
    console.log('adding this transaction:::', category);
    this.store.dispatch(categoryActions.createCategory({ category }));
  }

  deleteCategory() {
    let categoryid = this.currentCategoryId;
    console.log('cancel this transaction:::', this.currentCategoryId);
    this.store.dispatch(categoryActions.deleteCategory({ categoryid }));
    this.modalRefdel.hide();
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.modalRef.hide();
    if (this.editForm.value.id == "")
      this.addCategory(this.editForm.value);
    else
      this.editCategory(this.editForm.value);
  }

  openModal(template: TemplateRef<any>, task: any) {
    // task.id = task.id;
    if (task != null)
      this.editForm.setValue({ id: task.id!, name: task.name!, description: task.description! });
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(templatedel: TemplateRef<any>, category: Category) {

    this.currentCategoryId = category.id!;
    this.modalRefdel = this.modalService.show(templatedel);
  }

  ngOnInit(): void {
    var lintwait = "";

    this.store.select(fromRoot.getCategory).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      if (data.category != undefined) {
        this.category = data.category;
      }
    })
  }
}
