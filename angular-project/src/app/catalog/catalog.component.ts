import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

    products: any = [];

    constructor( private httpClient: HttpClient ) {

    }

    ngOnInit() {
        this.httpClient.get('assets/data/goods.json').subscribe(data => {
            this.products = data;
        })
    }
}