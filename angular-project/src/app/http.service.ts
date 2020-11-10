import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
   
@Injectable({
    providedIn: 'root'
})
export class HttpService{
   
    constructor(private http: HttpClient) { }
       
    getProducts() : Observable<Product[]> {
        return this.http.get('assets/data/goods.json').pipe(map(data => {
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
}