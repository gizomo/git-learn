import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FetchProducts, FetchProductsSuccess, ProductActionTypes } from '../actions';
import { ProductService } from '../../product.service';
import { Product } from '../../product/product'

@Injectable()
export class CatalogEffects {

    constructor(private actions$: Actions, private productService: ProductService) {}

    @Effect()
    fetchProducts$ = this.actions$.pipe(
        ofType<FetchProducts>(ProductActionTypes.FetchProducts),
        switchMap(() => this.productService.fetchProducts().pipe(
                map((products: Product[]) => new FetchProductsSuccess(products)),
                catchError(() => EMPTY)
            )
        )
    );
}
