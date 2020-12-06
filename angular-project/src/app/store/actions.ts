import { Action } from '@ngrx/store';
import { Product } from '../product/product';
    
    export enum ProductActionTypes {
        AddProduct = '[Product] Add product to catalog',
        FetchProducts = '[Products] Get items from server',
        FetchProductsSuccess = '[Products] Get items success',
        FetchProduct = '[Product] Get item from server',
        FetchProductSuccess = '[Product] Get item success',
    }

    export class AddProduct implements Action {
      readonly type = ProductActionTypes.AddProduct;
    
      constructor(public payload: Product) {}
    }

    export class FetchProduct implements Action {
      readonly type = ProductActionTypes.FetchProduct;

      constructor(public payload: number) {}
    }

    export class FetchProductSuccess implements Action {
      readonly type = ProductActionTypes.FetchProductSuccess;

      constructor(public payload: Product) {}
    }

    export class FetchProducts implements Action {
      readonly type = ProductActionTypes.FetchProducts;
    }
    
    export class FetchProductsSuccess implements Action {
      readonly type = ProductActionTypes.FetchProductsSuccess;
    
      constructor(public payload: Product[]) {}
    }
    
    export type ProductsActions = FetchProducts | FetchProductsSuccess | FetchProduct | FetchProductSuccess | AddProduct;