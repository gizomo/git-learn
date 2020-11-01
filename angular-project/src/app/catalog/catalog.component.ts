import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

    products: any = []; // Лучше создать класс/интерфейс

    constructor( private httpClient: HttpClient ) {

    }

    ngOnInit() {
        // Нужно помнить, что в данном случае на каждый запрос создаётся подписка и никуда не уходит, лучше возвращать из сервисов Observable, а управлять подпиской в компонентах
        this.httpClient.get('assets/data/goods.json').subscribe(data => {
            this.products = data;
        })
    }
}
