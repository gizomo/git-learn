import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './state/app'
import { ProductState } from './state/product';

const selectProducts = (state: AppState) => state.products;

export const getProducts = createSelector(
  selectProducts,
  (state: ProductState) => state.products
);

export const getSelectedProduct = createSelector(
  selectProducts,
  (state: ProductState) => state.selectedProduct
);