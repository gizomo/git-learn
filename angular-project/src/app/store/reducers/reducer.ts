import { ProductsActions, ProductActionTypes } from '../actions';
import { initialProductState, ProductState } from '../state/product';

    
export const CatalogReducer = (
    state = initialProductState,
    action: ProductsActions
): ProductState => {
    switch (action.type) {

        case ProductActionTypes.FetchProductsSuccess: {
            return {
                ...state,
                products: action.payload
            };
        }
        
        case ProductActionTypes.FetchProductSuccess: {
            return {
                ...state,
                selectedProduct: action.payload
            };
        }

        case ProductActionTypes.AddProduct: {
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        }
        
        default: {
            return state;
        }
    }
}