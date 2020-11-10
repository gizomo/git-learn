import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
   
@Injectable({
    providedIn: 'root'
})
export class HttpService{

    private productsUrl: string = 'assets/data/goods.json';
   
    constructor(private http: HttpClient) { }
       
    getProducts() : Observable<Product[]> {
        return this.http.get(this.productsUrl).pipe(map(data => {
            let productsList = data["goods"];
            return productsList.map(function(product:any) {
                return {
                    name: product.name,
                    description: product.description,
                    img: product.img,
                    price: product.price
                };
            });
        }));
    }

    getProduct(id: number) : Observable<Product> {
        return this.getProducts().pipe(
            map(products => products.find((product, index) => index === id))
        );
    }

    private initializeProduct(): Product {
        return {
            name: null,
            description: null,
            img: null,
            price: 0
        }
    }
}