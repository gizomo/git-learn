import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Product } from "../product/product";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

    products: Product[] = [];
    // products: any = []; // Лучше создать класс/интерфейс

    constructor( private httpService: HttpService ) { }

    ngOnInit() {
        // Нужно помнить, что в данном случае на каждый запрос создаётся подписка и никуда не уходит, лучше возвращать из сервисов Observable, а управлять подпиской в компонентах
        this.httpService.getProducts().subscribe(data => this.products = data)
    }
}
