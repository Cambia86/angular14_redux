import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { CategoryService } from '../../service/category.service';
import * as categoryAction from '../actions';


@Injectable()
export class CategoryEffects {

  constructor(
    private actions$: Actions,
    // private todoService: TodoService
    private categoryService: CategoryService
  ) { }

  getCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryAction.getCategoryAction),
      exhaustMap(action =>
        this.categoryService.getcategorys().pipe(
          map(response => {
            console.log("response:::", response)
            return categoryAction.getCategorySuccess({ response })
          }),
          catchError((error: any) => of(categoryAction.getCategoryFailure(error))))
      )
    )
  );

  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryAction.createCategory),
      exhaustMap(cat =>
        this.categoryService.addcategory(cat.category).pipe(
          map(response => categoryAction.createCategorySuccess(response)),
          catchError((error: any) => of(categoryAction.createCategoryFailure(error))))
      )
    )
  );


  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryAction.deleteCategory),
      exhaustMap((cat: any) => this.categoryService.deletecategory(cat.categoryid).pipe(
        map(response => categoryAction.deleteCategorySuccess(response)),
        catchError((error: any) => of(categoryAction.deleteCategoryFailure(error))))
      )
    )
  );

  editCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(categoryAction.editCategory),
      exhaustMap((cat: any) =>
        this.categoryService.editcategory(cat.category).pipe(
          map(response => {
            console.log("edittransaction response:::", response)
            return categoryAction.editCategorySuccess(response)
          }),
          catchError((error: any) => of(categoryAction.editCategoryFailure(error))))
      )
    )
  );

}
