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

    product: any = {}; // Лучше создать класс/интерфейс
    products: any = [];
    togglePrice = false;

    constructor(
        private auth: AuthService,
        private route: ActivatedRoute,
        private httpClient: HttpClient
        ) { }

    ngOnInit() {
        // У вас ведь есть сервис, который занимается получением данных, не нужно здесь дублировать эту логику
        // Если вы вернёте из сервиса Observable, всю логику можно будет обернуть в .pipe, и даже не делать подписку, а использовать async pipe
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
