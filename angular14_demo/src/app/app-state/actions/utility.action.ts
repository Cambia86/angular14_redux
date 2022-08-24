import { createAction, props } from '@ngrx/store';
// import { Transaction } from '../entity/transaction.entity';
// import { TRANSACTION } from '../entity';

export const GET_CATEGORY = '[TRANSACTION] Get CATEGORY';
export const GET_CATEGORY_SUCCESS = '[TRANSACTION] Get CATEGORY Success';
export const GET_CATEGORY_FAILURE = '[TRANSACTION] Get CATEGORY Failure';

export const CREATE_CATEGORY = '[CATEGORY] Create CATEGORY';
export const CREATE_CATEGORY_SUCCESS = '[CATEGORY] Create CATEGORY Success';
export const CREATE_CATEGORY_FAILURE = '[CATEGORY] Create CATEGORY Failure';

export const DELETE_CATEGORY = '[CATEGORY] Delete CATEGORY';
export const DELETE_CATEGORY_SUCCESS = '[CATEGORY] Delete CATEGORY Success';
export const DELETE_CATEGORY_FAILURE = '[CATEGORY] Delete CATEGORY Failure';

export const EDIT_CATEGORY = '[CATEGORY] Edit CATEGORY';
export const EDIT_CATEGORY_SUCCESS = '[CATEGORY] Edit CATEGORY Success';
export const EDIT_CATEGORY_FAILURE = '[CATEGORY] Edit CATEGORY Failure';


export const getCategoryAction = createAction(
  GET_CATEGORY
);

export const getCategorySuccess = createAction(
  GET_CATEGORY_SUCCESS,
  props<any>()
);

export const getCategoryFailure = createAction(
  GET_CATEGORY_FAILURE,
  props<{ any: any }>()
);

export const createCategory = createAction(
  CREATE_CATEGORY,
  props<{ category: any }>()
);

export const createCategorySuccess = createAction(
  CREATE_CATEGORY_SUCCESS,
  props<any>()
);

export const createCategoryFailure = createAction(
  CREATE_CATEGORY_FAILURE,
  props<{ any: any }>()
);

export const deleteCategory = createAction(
  DELETE_CATEGORY,
  props<{ categoryid: any }>()
);

export const deleteCategorySuccess = createAction(
  DELETE_CATEGORY_SUCCESS,
  props<any>()
);

export const deleteCategoryFailure = createAction(
  DELETE_CATEGORY_FAILURE,
  props<{ any: any }>()
);

export const editCategory = createAction(
  EDIT_CATEGORY,
  props<{ category: any }>()
);

export const editCategorySuccess = createAction(
  EDIT_CATEGORY_SUCCESS,
  props<any>()
);

export const editCategoryFailure = createAction(
  EDIT_CATEGORY_FAILURE,
  props<{ any: any }>()
);
