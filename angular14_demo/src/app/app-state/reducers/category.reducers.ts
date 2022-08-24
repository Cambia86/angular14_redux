import { Action, createReducer, on } from '@ngrx/store';
import { Category } from '../entity/category.entity';
// import * as todoActions from '../actions';
import * as categoryAction from '../actions';
import * as _ from 'lodash'
import * as storage from '../state/storage';

export interface State {
  // tasks?: Task[];
  category?: Category[];
  currentCategory?: Category;
  deleteCategoryId?: any;
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

export const initialState: State = {
  category: storage.getItem('category').category != undefined ? storage.getItem('category').category : Array<Category>,
  currentCategory: {},
  deleteCategoryId: '',
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

const categoryReducer = createReducer(
  initialState,

  // GeTasks
  on(categoryAction.getCategoryAction, (state) => ({ ...state, isLoading: true })),
  on(categoryAction.getCategorySuccess, (state, result) => (
    { category: result.response, isLoading: false, isLoadingSuccess: true }
  )),

  // Create Task Reducers
  on(categoryAction.createCategory, (state, { category }) => (
    { ...state, isLoading: true, currentCategory: category }
  )),
  on(categoryAction.createCategorySuccess, (state, result) => {
    const category = undefined !== state.category ? _.cloneDeep(state.category) : [];
    const currentcategory = undefined !== state.currentCategory ? _.cloneDeep(state.currentCategory) : new Category("", "", "");
    currentcategory.id = result.categoryId;
    category.push(currentcategory);
    return {
      category: category,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Delete Task Reducers
  on(categoryAction.deleteCategory, (state, { categoryid }) => (
    { ...state, isLoading: true, deleteCategoryId: categoryid })
  ),
  on(categoryAction.deleteCategorySuccess, (state, result) => {
    let category = undefined !== state.category ? _.cloneDeep(state.category) : [];
    if (result.deletedCount > 0) {
      category = category.filter(cat => cat.id !== state.deleteCategoryId);
    }
    return {
      category: category,
      isLoading: false,
      isLoadingSuccess: true
    };
  }),

  // Edit Task Reducers
  on(categoryAction.editCategory, (state, category) => (
    { ...state, isLoading: true, currentCategory: category.category })
  ),
  on(categoryAction.editCategorySuccess, (state, result) => {
    let category = undefined !== state.category ? _.cloneDeep(state.category) : [];
    const currentcategory = undefined !== state.currentCategory ? _.cloneDeep(state.currentCategory) : new Category("", "", "");
    category = category.map(tsk => {
      if (tsk.id === currentcategory!.id) {
        tsk = currentcategory;
      }
      return tsk;
    });
    return {
      category: category,
      isLoading: false,
      isLoadingSuccess: true
    };
  })
);

export function reducer(state: State | undefined, action: Action): any {
  return categoryReducer(state, action);
}

export const getcategoryReducer = (state: State) => {
  return {
    category: state.category,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  };
};


