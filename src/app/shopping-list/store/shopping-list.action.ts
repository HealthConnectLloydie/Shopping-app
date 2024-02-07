import { Action } from '@ngrx/store';
import { Ingredients } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const DELETE_INGREDIENTS = 'DELETE_INGREDIENTS';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredients) {}
}

export class AddIngredientsList implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredients[]) {}
}

export class UpdateIngredients implements Action {
  readonly type = UPDATE_INGREDIENTS;

  constructor(public payload: Ingredients) {}
}

export class DeleteIngredients implements Action {
  readonly type = DELETE_INGREDIENTS;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type ShoppingListActions =
  | AddIngredients
  | AddIngredientsList
  | UpdateIngredients
  | DeleteIngredients
  | StartEdit
  | StopEdit;
