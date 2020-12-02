import { ProductState, initialProductState } from './product';

export interface AppState {
  products: ProductState;
}

export const initialAppState: AppState = {
  products: initialProductState
}

export function getInitialState(): AppState {
  return initialAppState;
}