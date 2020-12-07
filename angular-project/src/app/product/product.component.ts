import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Product } from "./product";
//import { HttpService } from "../http.service";
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state/app'
import { FetchProduct } from '../store/actions';
import { getSelectedProduct } from '../store/selectors';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    public product$ = this.store.pipe(select(getSelectedProduct));

    constructor(
        private auth: AuthService,
        private route: ActivatedRoute,
//        private httpService: HttpService
        private store: Store<AppState>
        ) { }

    ngOnInit() {
//        this.product = this.httpService.getProduct(+this.route.snapshot.params.productId);
        this.store.dispatch(new FetchProduct(this.route.snapshot.params.productId));
    }

    togglePrice(): Observable<boolean> {
        return this.auth.isAuthenticated();
    }
}
