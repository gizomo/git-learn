import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    product: any = {};
    products: any = [];
    togglePrice = false;

    constructor(
        private auth: AuthService,
        private route: ActivatedRoute,
        private httpClient: HttpClient
        ) { }

    ngOnInit() {
        this.httpClient.get('assets/data/goods.json').subscribe(data => {
            this.products = data;
            this.route.paramMap.subscribe(params => {
                this.product = this.products[+params.get('productId')];
                if(this.auth.isAuthenticated()) {
                    this.togglePrice = true;
                }
                else {
                    this.togglePrice = false;
                }
            });
        });
    }


}