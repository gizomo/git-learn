import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from "../http.service";
import { AuthService } from "../auth.service"
import { Product } from "../product/product";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

    products: Observable<Product[]>;

    constructor(
        private httpService: HttpService,
        private auth: AuthService
        ) { }

    ngOnInit() {
        this.products = this.httpService.getProducts();
    }

    toggleAddPrice(): Observable<boolean> {
        return this.auth.isAuthenticated();
    }
}
