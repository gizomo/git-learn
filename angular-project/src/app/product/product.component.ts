import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from "./product";
import { HttpService } from "../http.service";
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    product: Observable<Product>;
    togglePrice: Observable<boolean>;
    //togglePrice = false;

    constructor(
        private auth: AuthService,
        private route: ActivatedRoute,
        private httpService: HttpService
        ) { }

    ngOnInit() {
        // У вас ведь есть сервис, который занимается получением данных, не нужно здесь дублировать эту логику
        // Если вы вернёте из сервиса Observable, всю логику можно будет обернуть в .pipe, и даже не делать подписку, а использовать async pipe      
        this.product = this.httpService.getProduct(+this.route.snapshot.params.productId);

        this.togglePrice = this.auth.isAuthenticated();
    }
}