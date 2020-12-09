import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { HttpService } from "../http.service";
import { FetchProducts } from '../store/actions';
import { getProducts } from '../store/selectors';
import { AuthService } from "../auth.service"
import { AppState } from '../store/state/app';
//import { Product } from "../product/product";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

//    products: Observable<Product[]>;
    public products$ = this.store.pipe(select(getProducts));

    constructor(
//        private httpService: HttpService,
        private auth: AuthService,
        private store: Store<AppState>
        ) { }

    ngOnInit() {
//        this.products = this.httpService.getProducts();
        this.store.dispatch(new FetchProducts());
    }

    toggleAddProduct(): Observable<boolean> {
        return this.auth.isAuthenticated();
    }
}
