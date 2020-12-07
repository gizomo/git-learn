import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { FetchProduct, FetchProducts, FetchProductsSuccess, FetchProductSuccess, ProductActionTypes } from '../actions';
import { getProducts, getSelectedProduct } from '../selectors'
import { AppState } from '../state/app';
import { ProductService } from '../../product.service';
import { Product } from '../../product/product'

@Injectable()
export class CatalogEffects {

    constructor(private actions$: Actions, private store: Store<AppState>, private productService: ProductService) {}

    @Effect()
    fetchProducts$ = this.actions$.pipe(
        ofType<FetchProducts>(ProductActionTypes.FetchProducts),
        switchMap(() => this.productService.fetchProducts().pipe(
                map((products: Product[]) => new FetchProductsSuccess(products)),
                catchError(() => EMPTY)
            )
        )
    );

    @Effect()
    fetchProduct$ = this.actions$.pipe(
        ofType<FetchProduct>(ProductActionTypes.FetchProduct),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(getProducts))),
        switchMap(([id, products]) => {
            const selectedProduct = products.filter(product => product.id === +id)[0];
            return of(new FetchProductSuccess(selectedProduct));
        })
    );
}
