import { Action } from '@ngrx/store';
import { Product } from '../product/product';
    
    export enum ProductActionTypes {
//        Add = '[Product] Add to cart',
//        Remove = '[Product] Remove from cart',
        FetchProducts = '[Products] Get items from server',
        FetchProductsSuccess = '[Products] Get items success',
        FetchProduct = '[Product] Get item from server',
        FetchProductSuccess = '[Product] Get item success',
    }
/*    
    export class AddToCart implements Action {
      readonly type = ActionTypes.Add;
    
      constructor(public payload: Product) {}
    }

    export class RemoveFromCart implements Action {
      readonly type = ActionTypes.Remove;
    
      constructor(public payload: Product) {}
    }
*/  
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
    
    export type ProductsActions = /*AddToCart | RemoveFromCart |*/ FetchProducts | FetchProductsSuccess | FetchProduct | FetchProductSuccess;