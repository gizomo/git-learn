import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app'
import { CatalogReducer } from './reducer';

export const reducers: ActionReducerMap<AppState, any> = {
  products: CatalogReducer
}